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
        case "add_role":
        case "add_employee":
        case "update_employee_role":
    }


    // // code for updating employee role
    // try {
    //     let data = await Company.updateEmployeeRole(20, 3);

    // } catch(err) {
    //     console.log(err);
    // }

    // // code for displaying department
    // try {
    //     let data = await Company.viewTable("employee");
    //     console.table(data);
        
    // } catch (err) {
    //     console.log(err);
    // }

    // Company.disconnect();
}


main();