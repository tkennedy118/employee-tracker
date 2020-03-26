const Company = require('./db/companyDB');
const figlet = require('figlet');
const { prompt } = require('inquirer');

const choices = [
    {
        name: "View All Departments",
        value: "view_departments"
    },
    {
        name: "View All Roles",
        value: "view_roles",
    },
    {
        name: "View All Employees",
        value: "view_employees"
    },
    {
        name: "Add New Department",
        value: "add_department"
    },
    {
        name: "Add New Role",
        value: "add_role"
    },
    {
        name: "Add New Employee",
        value: "add_employee"
    },
    {
        name: "Update Employee Role",
        value: "update_employee_role"
    },
    {
        name: "Exit",
        value: "exit"
    }
];


const main = async function() {

    await displayHome();
    console.log("\n");
    
    let { choice } = await prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: choices
    });
    
    let data;
    switch (choice) {
        case "view_departments":
            data = await Company.getTable("department");
            console.table(data);
            break;
        case "view_roles":
            data = await Company.getTable("role");
            console.table(data);
            break;
        case "view_employees":
            data = await Company.getTable("employee");
            console.table(data);
            break;
        case "add_department":
            await addDepartment();
            break;
        case "add_role":
            await addRole();
            break;
        case "add_employee":
            await addEmployee();
            break;
        case "update_employee_role":
            await updateEmployeeRole();
            break;
        case "exit":
        default:
            Company.disconnect();
            return;
    }

    main();
}

const displayHome = async function() {

    
    figlet("Content Management System", (err, data) => {
        if (err) {
            console.log("Something went wrong...");
            return;
        }
        
        console.log(data);
    });
}

const addDepartment = async function() {

    try {
        const { name } = await prompt({
            type: "input",
            name: "name",
            message: "What is the name of the department you are adding?"
        });
    
        Company.addDepartment(name);

    } catch (err) {
        console.log(err);
    }
}

const addRole = async function() {

    try {
        const { title, salary, department } = await prompt([
            {
                type: "input",
                name: "title",
                message: "What is the name of the role?"
            },
            {
                type: "number",
                name: "salary",
                message: "What is the salary for this role?"
            },
            {
                type: "number",
                name: "department",
                message: "What is the id of the role's department?"
            }
        ]);
    
        Company.addRole(title, salary, department);

    } catch (err) {
        console.log(err);
    }
}

const addEmployee = async function() {

    try {
        const { fname, lname, roleId, mgrId } = await prompt([
            {
                type: "input",
                name: "fname",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "lname",
                message: "What is the employee's last name?"
            },
            {
                type: "number",
                name: "roleId",
                message: "What is the id of the employee's role?"
            },
            {
                type: "number",
                name: "mgrId",
                message: "What is the id of the employee's manager?"
            }
        ]);

        Company.addEmployee(fname, lname, roleId, mgrId);

    } catch (err) {
        console.log(err);
    }
}

const updateEmployeeRole = async function() {

    const choices = await Company.getDeptWithIdOnly();

    choices.forEach(choice => {
        choice.value = choice.department_id;
        delete choice.department_id;
    });

    try {
        const { empId, roleId } = await prompt([
            {
                type: "number",
                name: "empId",
                message: "What is the id of the employee?"
            },
            {
                type: "list",
                name: "roleId",
                Message: "What is the employee's new role?",
                choices: choices
            }
        ]);

        Company.updateEmployeeRole(empId, roleId);

    } catch (err) {
        console.log(err);
    }
}

main();