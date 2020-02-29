const Employee = require("./Employee");

// inherit from employee constructor
// set office number constructor
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
    }
}

// getRole function - return manager
Manager.prototype.getRole = function() {
    return "Manager";
};

// getOffice function - gets office number from constructor
Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
};

module.exports = Manager;
