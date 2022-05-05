from set_up import orm_connect
#-----SQLAlchemy imports-----#
from sqlalchemy import Column, Integer, Date, Numeric, String, ForeignKey, CheckConstraint
from sqlalchemy.schema import Sequence, Column
from sqlalchemy.orm import relationship, backref
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

class Department(Base):
    __tablename__ = 'departments'                              
    dep_no_seq = Sequence('dep_no_seq', start=10, increment=10)
    dept_no = Column(Integer, dep_no_seq, primary_key=True)    
    dept_name = Column(String(32), nullable=False)             
    loc = Column(String(32), nullable=False)                   

    def __init__(self, dept_name, loc):                        
        self.dept_name = dept_name                             
        self.loc = loc                                         

    def __repr__(self):                                        
        return f"Department: {self.dept_name:15} Location: {self.loc}"

class Employee(Base):
    __tablename__ = "employees"
    emp_no = Column(Integer, autoincrement=True, primary_key=True)
    emp_name = Column(String(32), nullable=False)
    address = Column(String(60), nullable=False)
    phone = Column(String(15), nullable=False)
    manager = Column(Integer, ForeignKey("employees.emp_no", name='emp_ref_man_fk', ondelete='SET NULL', onupdate='CASCADE'))

    manager_rel = relationship("Employee", backref=backref('emp_man', remote_side=[emp_no], uselist=False))

    def __init__(self, emp_name, address, phone, manager):
        self.emp_name = emp_name
        self.address = address
        self.phone = phone
        self.manager = manager

    def __repr__(self):
        return f"Employee: {self.emp_name:10}"

class JobHistory(Base):
    __tablename__ = "job_history"
    jh_id = Column(Integer, primary_key=True)
    emp_no = Column(Integer, ForeignKey("employees.emp_no", name='jobhist_ref_emp_fk', ondelete='CASCADE', onupdate='CASCADE'))
    start_date = Column(Date, nullable=False)
    end_date = Column(Date)
    job = Column(String(32), nullable=False)
    salary = Column(Numeric(7, 2), nullable=False)
    dept_no = Column(Integer, ForeignKey("departments.dept_no", name='jobhist_ref_dep_fk', ondelete='SET NULL', onupdate='CASCADE'))
    chng_desc = Column(String(32))

    emp_rel = relationship('Employee', backref='job_history')
    dep_rel = relationship('Department', backref='job_history')

    __table_args__ = (CheckConstraint(salary >= 0, name="emp_sal_ck"), {})

    def __init__(self, emp_no, start_date, end_date, job, salary, dept_no, chng_desc):
        self.emp_no = emp_no
        self.start_date = start_date
        self.end_date = end_date
        self.job = job
        self.salary = salary
        self.dept_no = dept_no
        self.chng_desc = chng_desc

    def __repr__(self):
        if self.end_date is not None:
            return f"Employee Number: {self.emp_no} Started Job as {self.job} on: {self.start_date} Ended: {self.end_date} Salary: ${self.salary}"
        else:
            return f"Employee Number: {self.emp_no} Started Job as {self.job} on: {self.start_date} Salary: ${self.salary}"

def main():
    engine = orm_connect('emp_system', False)
    Base.metadata.create_all(engine) 

if __name__ == "__main__":
    main()