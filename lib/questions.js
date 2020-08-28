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
        type: "input",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role",
        message: "What is the employee's role?"
    },
    {
        type: "confirm",
        name: "addOrEnd",
        message: "Would you like to add another employee?"
    }
];

module.exports = questions;