const Employee = require("./Employee");

// inherit from employee constructor
// set school constructor

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

// getRole function - return intern
Intern.prototype.getRole = function() {
    return "Intern";
};

// getSchool function - gets school name from constructor
Intern.prototype.getSchool = function() {
    return this.school;
};

module.exports = Intern;
