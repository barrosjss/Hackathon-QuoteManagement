import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore

db = firestore.client()
client_ref = db.collection('clients')

clientAPI = Blueprint('clientsAPI', __name__)

@clientAPI.route('/add', methods=['POST'])
def create():
    try:
        nit = request.form.get('nit')
        razon_social = request.form.get('razon_social')
        direccion = request.form.get('direccion')
        estado = request.form.get('estado')
        id = uuid.uuid4()

        data = {
            'nit':nit,
            'razon_social':razon_social,
            'direccion':direccion,
            'estado': estado,
        }

        client_ref.document(id.hex).set(data)

        return jsonify({'status': str('Data add successfully!')})
    
    except Exception as e:
        return f"An error ocurred: {e}"

     