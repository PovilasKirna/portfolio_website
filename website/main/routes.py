from flask import Blueprint, render_template, redirect, url_for, Response, request
from flask_login import login_required, current_user
from flask_mail import Message
from sqlalchemy import desc,text

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def home():
    return render_template('Index.html')
