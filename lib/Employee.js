// Employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

// getName function - gets name from constructor
Employee.prototype.getName = function() {
    return this.name;
};

// getId function - gets ID from constructor
Employee.prototype.getId = function() {
    return this.id;
};

// getEmail function - gets email from constructor
Employee.prototype.getEmail = function() {
    return this.email;
};

// getRole function - returns Employee
Employee.prototype.getRole = function() {
    return "Employee";
};

module.exports = Employee;
