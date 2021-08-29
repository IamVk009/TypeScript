// In ES6 Js class we can not define access modifiers, but in TS class we can use it.

// Class declaration.

class Employee1{
    // We can specify access modifiers like publi private protected, etc.
    public name: string;
    private address: string;
    protected salary: number;
    
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

let emp3 = new Employee1("Ramesh","Delhi",12000);
emp3.show();