from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    from routes import main_bp
    app.register_blueprint(main_bp)
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000, debug=True)