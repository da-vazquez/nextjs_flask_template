"""
Default Imports
"""
from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_cors import CORS 
import os
import requests
import re
import json
import warnings

"""
Custom Imports
"""
from config import settings
from instance import secrets

app = Flask(__name__)
CORS(app)
app.config.from_pyfile("instance/secrets.py", silent=True)
app.logger.setLevel(secrets.LOG_LEVEL)

warnings.filterwarnings("ignore")


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/api/v1/status", methods=["GET"])
def status():
    return jsonify({
        "message": "API is currently up and running!",
        "status": 200
    }), 200


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=settings.LAYER_PORT,
        debug=secrets.DEBUG
    )