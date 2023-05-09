INSERT INTO departments(name)
VALUES ("Sales"),
       ("Technical");

INSERT INTO roles(title,salary,department_id)
VALUES ("Head of Sales",200000,1),
       ("Technical Officer", 75000,2),
       ("senior Technician",90000,2);

INSERT INTO employees(first_name,last_name,role_id)
values ("tom","Ford",1),
       ("James","Bond",2);      