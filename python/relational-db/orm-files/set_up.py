import os
from sqlalchemy import create_engine

def orm_connect(database, echo=True):
    username = os.getenv('ORM_USER')
    password = os.getenv('ORM_PASSWORD')
    host = os.getenv('ORM_HOST')
    engine = None
    try:
        engine = create_engine(f'postgresql://{username}:{password}@{host}/{database}', echo=echo)    # 1
    except Exception as e:
        print(e)
    else:
        print("Successfully connected")
    return engine


def main():
    engine = orm_connect('emp_system')

if __name__ == "__main__":
    main()