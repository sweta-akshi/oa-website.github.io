import pymongo
from bson import ObjectId
import os


class MongoConnect:
    
    def __init__(self, dbname, dbhost, dbuser=None, dbpassword=None):

        self.client = None
        self.database = None

        try:
            if dbuser == None and dbpassword == None:   
                self.client = pymongo.MongoClient(f"mongodb://{dbhost}/")
            else:
                client = pymongo.MongoClient(host=dbhost, username=dbuser, password=dbpassword, authSource=dbname)


            self.database = self.client[dbname]
        
        except Exception as e:
            print("Error: ", e)
        else:
            print("Connection successful: ", dbname)
            


   
    def __del__(self):
        if self.client is not None:
            self.client.close()
            print(f"Connection to database closed")



def main():
    host = os.getenv("M_HOST")

    # TODO: Uncomment the line below and replace <YOUR_LDAP> with your ldap
    # dbConnect = MongoConnect("<YOUR_LDAP>_testdata", host, os.getenv("M_USER"), os.getenv("M_PASSWORD"))
    
   
    
if __name__ == "__main__":
    main()