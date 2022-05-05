import psycopg2 as pg
import os

class PostgresConnect:
    def __init__(self, database):
        username = os.getenv('PG_USER')
        password = os.getenv('PG_PASSWORD')
        host = os.getenv('PG_HOST')
        try:
            self.db = pg.connect(host=host, user=username, password=password, database=database)
        except (pg.OperationalError, AttributeError) as e:
            print(e)
            self.db = None
        else:
            print('Connected to Postgres database')

    def __del__(self):
        self.db.close()
        print("Connection closed")

    # TODO: add other class methods here

def main():
    db_connect = PostgresConnect('inv_system')

    # TODO: all database interactions will go here


if __name__ == "__main__":
    main()