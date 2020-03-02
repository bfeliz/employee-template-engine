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
let rend;
(async function init() {
    try {
        let user = await inquirer.prompt(start);
        if (user.enter === true) {
            user2 = await inquirer.prompt(equest);
            switch (user2.type) {
                case "Intern":
                    int = await inquirer.prompt(iquest);
                    const intern = new Intern(
                        user2.name,
                        user2.id,
                        user2.email,
                        int.school
                    );
                    html.push(intern);
                    break;
                case "Engineer":
                    eng = await inquirer.prompt(enquest);
                    const engineer = new Engineer(
                        user2.name,
                        user2.id,
                        user2.email,
                        eng.github
                    );
                    html.push(engineer);
                    break;
                case "Manager":
                    man = await inquirer.prompt(mquest);
                    const manager = new Manager(
                        user2.name,
                        user2.id,
                        user2.email,
                        man.office
                    );
                    html.push(manager);
            }
            // start questions over until user selects NO to creating new employee
            init();
        } else {
            rend = render(html);
            writeToFile();
        }
    } catch (err) {
        console.log(err);
    }
})();

// write returned HTML into new file
function writeToFile() {
    fs.writeFile(outputPath, rend, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File generated");
        }
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
