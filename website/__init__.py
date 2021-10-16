from flask import Flask, redirect, url_for, flash, abort,request, Response
from flask_admin import Admin, AdminIndexView, babel
from flask_login import LoginManager, current_user
from flask_admin.contrib.sqla import ModelView
from flask_sqlalchemy import SQLAlchemy
from flask_admin.menu import MenuLink
from flask_mail import Mail, Message
from .config import Config

mail = Mail()



def expose(url='/', methods=('GET',)):
    def wrap(f):
        if not hasattr(f, '_urls'):
            f._urls = []
        f._urls.append((url, methods))
        return f
    return wrap


admin = Admin(template_mode='bootstrap4')

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)
    
    mail.init_app(app)
    admin.init_app(app)
    
    # @login_manager.user_loader
    # def load_user(id):
    #     return User.query.get(int(id))

    from website.main.routes import main

    app.register_blueprint(main, url_prefix='/')

    
    #create_database(app)
    
    return app

# def create_database(app):
#     db.create_all(app=app)
#     print('Created Database!')
    

