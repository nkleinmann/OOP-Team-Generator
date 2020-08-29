//array of objects with questions for user
const questions =
    [
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter a name");
                    return false;
                } 
                return true;
            }

        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter an id");
                    return false;
                } 
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter an email");
                    return false;
                } 
                return true;
            }
        },
        {
            type: "list",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role",
            message: "What is the employee's role?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter a role");
                    return false;
                } 
                return true;
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manger's office number?",
            when: (answers) => answers.role === "Manager",
            //https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter an office number");
                    return false;
                } 
                return true;
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github user name?",
            when: (answers) => answers.role === "Engineer",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter a github username");
                    return false;
                } 
                return true;
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            when: (answers) => answers.role === "Intern",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter a school");
                    return false;
                } 
                return true;
            }
        },
        {
            type: "confirm",
            name: "addOrEnd",
            message: "Would you like to add another employee?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter yes or no");
                    return false;
                } 
                return true;
            }
        }
    ];

module.exports = questions;