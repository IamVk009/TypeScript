// Class declaration.

class Employee{
    // Variable inside class should not use var or let keyword but it should have type declared.
    name: string;
    address: string;
    salary: number;
    
    // Constructor
    constructor(name: string,address: string,salary: number){
        this.name = name;
        this.address = address;
        this.salary = salary;
    }

    show(): void{
        console.log(`Name of Employee is ${this.name}`);
        console.log(`Address of Employee is ${this.address}`);
        console.log(`Salary of Employee is ${this.salary}`);
    }
}

let e = new Employee("Ramesh","Delhi",12000);
e.show();