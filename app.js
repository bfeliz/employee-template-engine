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

(async function startQuest() {
    let man = await inquirer.prompt(mquest);
    const manager = new Manager(man.name, man.id, man.email, man.office);
    html.push(manager);
    nextQuest();
})();

async function nextQuest() {
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
            }
            nextQuest();
        } else {
            rend = render(html);
            writeToFile();
        }
    } catch (err) {
        console.log(err);
    }
}

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
