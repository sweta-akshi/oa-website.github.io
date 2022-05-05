from set_up import orm_connect
from models import Employee, Department, JobHistory

from sqlalchemy.orm import sessionmaker
import datetime

def populate(engine):
    Session = sessionmaker(bind=engine)
    session = Session()

    departments = [Department("Accounting", "New York"),
                    Department("Research", "Dallas"),
                    Department("Sales", "Chicago"),
                    Department("Operations", "Boston")]
    try:
        session.add_all(departments)
    except Exception as e:
        print("Unable to add to departments", e)
        session.rollback()
    else:
        session.commit()
    finally:
        session.close()


    #populate employee table
    Session = sessionmaker(bind=engine)
    session = Session()
    employees = [Employee('KING', '1745 T Street Southeast, Washington, DC 20020', '9065250900', None),
                 Employee('JONES', '6007 Applegate Lane, Louisville, KY 40219', '2549778414', 1),
                 Employee('BLAKE', '560 Penstock Drive, Grass Valley, CA, 95945', '4832860051', 2),
                 Employee('CLARK', '150 Carter Street, Manchester, CT 06040', '2993665124', 2),
                 Employee('SCOTT', '2721 Lindsay Avenue, Louisville, KY 40206', '3735175382', 2),
                 Employee('FORD', '18 Densmore Drive, Essex, VT, 05452', '9399000592', 2),
                 Employee('MILLER', '637 Britannia Drive, Vallejo, CA 94591', '5233449830', 3),
                 Employee('ADAMS', '5601 West Crocus Drive, Glendale, AZ 85306', '9657794729', 3),
                 Employee('JAMES', '5403 Illinois Avenue, Nashville, TN 37209', '6289793037', 3),
                 Employee('SMITH', '8821 West Myrtle Avenue, Glendale, AZ 85305', '5842245824', 3),
                 Employee('WARD', '2203 7th Street Road, Louisville, KY 40208', '3604908337', 4),
                 Employee('ALLEN', '6463 Vrain Street, Arvada, CO 80003', '8106088530', 4),
                 Employee('TURNER', '87 Horseshoe Drive, West Windsor, VT 05037', '4108745135', 4),
                 Employee('MARTIN', '60 Desousa Drive, Manchester, CT 06040', '3447528920', 4)]
    try:
        session.add_all(employees)
    except Exception as e:
        print("Unable to add to employees", e)
        session.rollback()
    else:
        session.commit()
    finally:
        session.close()


    #populate job_history table
    jhistories = [JobHistory(1, datetime.datetime(1981, 11, 17), None, 'PRESIDENT', 5000, 10, 'New Hire'),
                  JobHistory(2, datetime.datetime(1981, 4, 2), None, 'MANAGER', 2975, 20, 'New Hire'),
                  JobHistory(3, datetime.datetime(1981, 5, 3), None, 'MANAGER', 2850, 30, 'New Hire'),
                  JobHistory(4, datetime.datetime(1981, 6, 9), None, 'MANAGER', 2450, 10, 'New Hire'),
                  JobHistory(5, datetime.datetime(1981, 12, 3), None, 'ANALYST', 3000, 20, 'New Hire'),
                  JobHistory(6, datetime.datetime(1980, 12, 17), datetime.datetime(1990, 5, 4), 'CLERK', 800, 20, 'New Hire'),
                  JobHistory(6, datetime.datetime(1990, 5, 5), None, 'ANALYST', 3000, 20, 'Promoted to Analyst'),
                  JobHistory(7, datetime.datetime(1982, 1, 23), None, 'CLERK', 1300, 10, 'New Hire'),
                  JobHistory(8, datetime.datetime(1987, 5, 23), datetime.datetime(1988, 4, 12), 'CLERK', 1100, 20, 'New Hire'),
                  JobHistory(8, datetime.datetime(1988, 4, 13), None, 'CLERK', 1040, 20, 'Raise'),
                  JobHistory(9, datetime.datetime(1981, 12, 3), datetime.datetime(1983, 1, 14), 'CLERK', 950, 10, 'New Hire'),
                  JobHistory(9, datetime.datetime(1983, 1, 15), None, 'CLERK', 950, 30, 'Changed to Dept 3'),
                  JobHistory(10, datetime.datetime(1980, 12, 17), None, 'CLERK', 1000, 20, 'New Hire'),
                  JobHistory(11, datetime.datetime(1981, 2, 2), None, 'SALESMAN', 1250, 30, 'New Hire'),
                  JobHistory(12, datetime.datetime(1981, 2, 20), None, 'SALESMAN', 1600, 30, 'New Hire'),
                  JobHistory(13, datetime.datetime(1981, 9, 8), None, 'SALESMAN', 1500, 30, 'New Hire'),
                  JobHistory(14, datetime.datetime(1981, 9, 28), None, 'SALESMAN', 1250, 30, 'New Hire')]
    try:
        session.add_all(jhistories)
    except Exception as e:
        print("Unable to add to job history", e)
        session.rollback()
    else:
        session.commit()
    finally:
        session.close()

def main():
    engine = orm_connect('emp_system', False)
    populate(engine)

if __name__ == "__main__":
    main()