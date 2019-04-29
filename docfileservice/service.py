from flask import Flask
from flask_restful import Resource, Api
from flask import request 
from flask_cors import CORS

from documents import Documents
from docloader import updateFilelists

from threading import Thread


app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Documents, '/docservice/')

if __name__ == '__main__':
    print("service started ...")
    updateFilelists()
    app.run(debug=True , port = 6756)
    
