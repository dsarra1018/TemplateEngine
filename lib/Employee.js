// TODO: Write code to define and export the Employee class
class Employee {

    // constructor
    // param: name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // functions
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;