const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

// create new array for each object based on employee type and call required function to input that array data into HTML templates
const render = employees => {
    const html = [];

    html.push(
        employees
            .filter(employee => employee.type === "Manager")
            .map(manager => renderManager(manager))
    );
    html.push(
        employees
            .filter(employee => employee.type === "Engineer")
            .map(engineer => renderEngineer(engineer))
    );
    html.push(
        employees
            .filter(employee => employee.type === "Intern")
            .map(intern => renderIntern(intern))
    );

    return renderMain(html.join(""));
};

// replace placeholders for manager HTML
const renderManager = manager => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf8"
    );
    template = replacePlaceholders(template, "name", manager.name);
    template = replacePlaceholders(template, "role", manager.type);
    template = replacePlaceholders(template, "email", manager.email);
    template = replacePlaceholders(template, "id", manager.id);
    template = replacePlaceholders(template, "officeNumber", manager.office);
    return template;
};

// replace placeholders for engineer HTML
const renderEngineer = engineer => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );
    template = replacePlaceholders(template, "name", engineer.name);
    template = replacePlaceholders(template, "role", engineer.type);
    template = replacePlaceholders(template, "email", engineer.email);
    template = replacePlaceholders(template, "id", engineer.id);
    template = replacePlaceholders(template, "github", engineer.github);
    return template;
};

// replace placeholders for intern HTML
const renderIntern = intern => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "intern.html"),
        "utf8"
    );
    template = replacePlaceholders(template, "name", intern.name);
    template = replacePlaceholders(template, "role", intern.type);
    template = replacePlaceholders(template, "email", intern.email);
    template = replacePlaceholders(template, "id", intern.id);
    template = replacePlaceholders(template, "school", intern.school);
    return template;
};

// insert all the HTML cards rendered above into the main HTML body template
const renderMain = html => {
    const template = fs.readFileSync(
        path.resolve(templatesDir, "main.html"),
        "utf8"
    );
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;

// const render = employees => {
//     const html = [];

//     html.push(
//         employees
//             .filter(employee => employee.getRole() === "Manager")
//             .map(manager => renderManager(manager))
//     );
//     html.push(
//         employees
//             .filter(employee => employee.getRole() === "Engineer")
//             .map(engineer => renderEngineer(engineer))
//     );
//     html.push(
//         employees
//             .filter(employee => employee.getRole() === "Intern")
//             .map(intern => renderIntern(intern))
//     );

//     return renderMain(html.join(""));
// };

// const renderManager = manager => {
//     let template = fs.readFileSync(
//         path.resolve(templatesDir, "manager.html"),
//         "utf8"
//     );
//     template = replacePlaceholders(template, "name", manager.getName());
//     template = replacePlaceholders(template, "role", manager.getRole());
//     template = replacePlaceholders(template, "email", manager.getEmail());
//     template = replacePlaceholders(template, "id", manager.getId());
//     template = replacePlaceholders(
//         template,
//         "officeNumber",
//         manager.getOfficeNumber()
//     );
//     return template;
// };

// const renderEngineer = engineer => {
//     let template = fs.readFileSync(
//         path.resolve(templatesDir, "engineer.html"),
//         "utf8"
//     );
//     template = replacePlaceholders(template, "name", engineer.getName());
//     template = replacePlaceholders(template, "role", engineer.getRole());
//     template = replacePlaceholders(template, "email", engineer.getEmail());
//     template = replacePlaceholders(template, "id", engineer.getId());
//     template = replacePlaceholders(template, "github", engineer.getGithub());
//     return template;
// };

// const renderIntern = intern => {
//     let template = fs.readFileSync(
//         path.resolve(templatesDir, "intern.html"),
//         "utf8"
//     );
//     template = replacePlaceholders(template, "name", intern.getName());
//     template = replacePlaceholders(template, "role", intern.getRole());
//     template = replacePlaceholders(template, "email", intern.getEmail());
//     template = replacePlaceholders(template, "id", intern.getId());
//     template = replacePlaceholders(template, "school", intern.getSchool());
//     return template;
// };

// const renderMain = html => {
//     const template = fs.readFileSync(
//         path.resolve(templatesDir, "main.html"),
//         "utf8"
//     );
//     return replacePlaceholders(template, "team", html);
// };

// const replacePlaceholders = (template, placeholder, value) => {
//     const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
//     return template.replace(pattern, value);
// };

// module.exports = render;
