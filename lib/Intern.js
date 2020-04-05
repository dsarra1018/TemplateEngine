// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {

    // constructor
    // param: name, id, email, and school
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    // functions
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;