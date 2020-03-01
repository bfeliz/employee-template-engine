const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// require the questions modules
const start = require("./questions/start");
const equest = require("./questions/equest");
const iquest = require("./questions/iquest");
const enquest = require("./questions/enquest");
const mquest = require("./questions/mquest");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// Use inquirer to gather user data and push generated objects to html array
let html = [];
let array = [];
(async function init() {
    try {
        let user = await inquirer.prompt(start);
        if (user.enter === true) {
            user2 = await inquirer.prompt(equest);
            switch (user2.type) {
                case "Intern":
                    int = await inquirer.prompt(iquest);
                    html.push({ ...user2, ...int });
                    break;
                case "Engineer":
                    eng = await inquirer.prompt(enquest);
                    html.push({ ...user2, ...eng });
                    break;
                case "Manager":
                    man = await inquirer.prompt(mquest);
                    html.push({ ...user2, ...man });
            }
            init();
        } else {
            // array = [Employee, Manager, Engineer, Intern];
            // console.log(array);
            // const newRend = render(array);
            // console.log(newRend);
            console.log(html);
            // const rend = render(html);
            // console.log(rend);
        }
    } catch (err) {
        console.log(err);
    }
})();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
