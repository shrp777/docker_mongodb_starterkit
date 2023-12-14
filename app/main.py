import os
import pymongo
import pprint

MONGODB_ROOT_USERNAME = os.getenv('MONGODB_ROOT_USERNAME')
MONGODB_ROOT_PASSWORD = os.getenv('MONGODB_ROOT_PASSWORD')

MONGODB_USERNAME = os.getenv('MONGODB_USERNAME')
MONGODB_PASSWORD = os.getenv('MONGODB_PASSWORD')

MONGODB_COLLECTION = os.getenv('MONGODB_COLLECTION')

MONGODB_SERVER = os.getenv('MONGODB_SERVER')
MONGODB_DATABASE = os.getenv('MONGODB_DATABASE')

client = pymongo.MongoClient("mongodb://"+MONGODB_ROOT_USERNAME +
                             ":"+MONGODB_ROOT_PASSWORD+"@"+MONGODB_SERVER+":27017")

db = client.books_db

collection = db.books

result = collection.find({})

for book in collection.find():
    pprint.pprint(book)

client.close()
