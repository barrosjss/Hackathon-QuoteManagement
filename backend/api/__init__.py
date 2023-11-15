from flask import Flask
from firebase_admin import credentials, initialize_app

cred = credentials.Certificate("backend/api/key/serviceAccountKey.json")
defaul_app = initialize_app(cred)

def create_app():

    app = Flask(__name__)
    app.config['SECRET_KEY'] = ''

    from api.models.clientAPI import clientAPI
    # from models.productAPI import productAPI
    # from models.quotationAPI import quotationAPI

    app.register_blueprint(clientAPI, url_prefix="/clients")
    # app.register_blueprint(productAPI, url_prefix="/product")
    # app.register_blueprint(quotationAPI, url_prefix="/quotation")

    return app

