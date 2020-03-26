const Company = require('./db/companyDB');
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

    let data;

    let { choice } = await prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: choices
    });

    switch (choice) {
        case "view_departments":
            data = await Company.viewTable("department");
            console.table(data);
            break;
        case "view_roles":
            data = await Company.viewTable("role");
            console.table(data);
            break;
        case "view_employees":
            data = await Company.viewTable("employee");
            console.table(data);
            break;
        case "add_department":
            await addDepartment();
            break;
        case "add_role":
            await addRole();
            break;
        case "add_employee":
        case "update_employee_role":
        case "exit":
        default:
            Company.disconnect();
            return;
    }

    main();
}

const addDepartment = async function() {

    try {
        const { name } = await prompt({
            type: "input",
            name: "name",
            message: "What is the name of the department you are adding?"
        });
    
        Company.addDepartment(name);

    } catch(err) {
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

    } catch(err) {
        console.log(err);
    }
}


main();