class Person {
    constructor(name) {
        console.log(name + ' Person contructor');
    }

    getID() {
        return 10;
    }
}

class Employee extends Person {
    constructor(name) {
        super(name);
        console.log(name + ' Employee Contructor')
    }
    getID() {
        return super.getID();
    }
}

let emp = new Employee("Hoang Khoi");
console.log(emp.getID());