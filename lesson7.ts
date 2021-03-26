class Person {
    public fName: string;
    public lName: string;
    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName;
    }
}

class Person1 {
    constructor(public fName: string, public lName: string) {
    }
}

let p = new Person1("Hoang", "Khoi");
console.log(p.fName + " " + p.lName);