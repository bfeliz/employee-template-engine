const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// inherit from employee constructor
// set GitHub constructor

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

// getRole function - return engineer
Engineer.prototype.getRole = function() {
    return "Engineer";
};

// getGithub function - gets GitHub name from constructor
Engineer.prototype.getGithub = function() {
    return this.github;
};

module.exports = Engineer;
