USE company_db;

INSERT INTO department (name)
VALUES
    ("Science"),
    ("Education"),
    ("Medicine"),
    ("Business");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Chair", 110000, 1),
    ("Professor", 80000, 1),
    ("Adjunct", 30000, 1),
    ("Chair", 90000, 2),
    ("Professor", 70000, 2),
    ("Adjunct", 25000, 2),
    ("Chair", 115000, 3),
    ("Professor", 80000, 3),
    ("Adjunct", 30000, 3),
    ("Chair", 85000, 4),
    ("Professor", 65000, 4),
    ("Adjunct", 20000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Alex", "Ross", 1, null),
    ("Taylor", "Murphy", 2, 1),
    ("Scott", "Smith", 2, 1),
    ("Michael", "Barry", 3, 1),
    ("Jessica", "Lindsy", 4, null),
    ("Aria", "Snow", 5, 5),
    ("Cindy", "Tucker", 6, 5),
    ("Tyler", "Andrews", 6, 5),
    ("Kevin", "Peterson", 6, 5),
    ("Jennifer", "Peck", 7, null),
    ("Isaac", "Newman", 8, 10),
    ("Sam", "Boven", 8, 10),
    ("Ryan", "England", 9, 10),
    ("Wade", "Collins", 9, 10),
    ("Gary", "Smith", 10, null),
    ("Amanda", "Johnson", 11, 15),
    ("Robert", "Benson", 11, 15), 
    ("Jordan", "Potter", 11, 15),
    ("Carla", "Kennedy", 12, 15);