class Employee {
    constructor (name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
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
        return "Employee";
    }
}

module.exports = Employee;