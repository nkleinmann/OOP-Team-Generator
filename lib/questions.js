//array of objects with questions for user
const questions = 
[
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"

    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role",
        message: "What is the employee's role?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manger's office number?",
        when: (answers) => answers.role === "Manager"
        //https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer

    },
    {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's github user name?",
        when: (answers) => answers.role === "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        when: (answers) => answers.role === "Intern"
    },
    {
        type: "confirm",
        name: "addOrEnd",
        message: "Would you like to add another employee?"
    }
];

module.exports = questions;