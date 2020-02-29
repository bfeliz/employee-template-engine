const Employee = require("./Employee");

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
