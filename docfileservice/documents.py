from flask_restful import Resource
from flask import request
from bson import ObjectId
from threading import Thread
from docloader import updateFilelists,delete_list_of_files,return_all_file_list,return_all_file_similarity_list

class Documents(Resource):
    
    def get(self):
        params = request.args.to_dict()
        if params["type"] == "allFiles":
            return return_all_file_list(),200
        if params["type"] == "similarity":
            return return_all_file_similarity_list(),200
    
    def post(self):
        payload = request.json
        print (payload)
        files = payload['files']
        print (files)
        err = delete_list_of_files(files)
        if err != None:
            return err,400
        t = Thread(target=updateFilelists)
        t.start()
        return "files Deleted successfully",200 

