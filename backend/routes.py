from flask import Blueprint, jsonify, send_from_directory, request
from mailtrap import MailtrapClient, Mail, Address
import pandas as pd
import os
from dotenv import load_dotenv

load_dotenv()

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def serve_frontend():
    return send_from_directory(os.path.join(os.getcwd(), 'frontend_dist'), 'index.html')

@main_bp.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(os.path.join(os.getcwd(), 'frontend_dist'), path)

@main_bp.route('/api/programs', methods=['GET'])
def get_programs():
    excel_path = 'programs.xlsx'
    df = pd.read_excel(excel_path, header=[1])

    # Rename columns for clarity
    df.columns = [
        'bachelor_name', 'bachelor_link',
        'master_name', 'master_link',
        'doctor_name', 'doctor_link'
    ]

    result = {
        "bachelor": [],
        "master": [],
        "doctor": []
    }

    for _, row in df.iterrows():
        if pd.notna(row['bachelor_name']) and pd.notna(row['bachelor_link']):
            result['bachelor'].append({
                "name": str(row['bachelor_name']).strip(),
                "link": str(row['bachelor_link']).strip()
            })
        if pd.notna(row['master_name']) and pd.notna(row['master_link']):
            result['master'].append({
                "name": str(row['master_name']).strip(),
                "link": str(row['master_link']).strip()
            })
        if pd.notna(row['doctor_name']) and pd.notna(row['doctor_link']):
            result['doctor'].append({
                "name": str(row['doctor_name']).strip(),
                "link": str(row['doctor_link']).strip()
            })

    return jsonify(result)

@main_bp.route('/api/send_email', methods=['POST'])
def send_email():
    print("Received request to send email")
    try:
        data = request.json
        sender = data.get('sender')
        subject = data.get('subject')
        receiver_email = data.get('receiver_email')
        email_body = data.get('email_body')

        mail = Mail(
            sender=Address(email="support@stratios.net", name=sender),
            to=[Address(email=receiver_email)],
            subject=f'{subject} - PBHEA Contact Form',
            category="PBHEA Contact Form",
            text=email_body,
        )

        token = os.getenv("MAILTRAP_TOKEN")
        if not token:
            raise Exception("MAILTRAP_TOKEN is not set in environment")

        client = MailtrapClient(token=token)
        response = client.send(mail)

        return jsonify({"status": "success", "message": "Email sent successfully"}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500