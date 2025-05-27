from flask import Flask, Blueprint, jsonify
import pandas as pd

main_bp = Blueprint('main', __name__)

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
    