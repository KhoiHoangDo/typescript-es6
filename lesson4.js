class Person {
    //Các loại phương thức:
    
    //Loại 1: constructor
    constructor(name) {
        this.name = name;
        console.log(this.name + " constructor.")
    }

    //Loại 2: Gọi trực tiếp
    static talk(){
        console.log("This static method is talk.")
    }

    //Loại 3:
    run(){
        console.log("Person running...")
    }
}

let p = new Person("Khoi");
p.run();
Person.talk();