// general employee questions

const equest = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "type",
        message: "What type of employee are you entering?",
        choices: ["Intern", "Engineer", "Manager"]
    }
];

module.exports = equest;
