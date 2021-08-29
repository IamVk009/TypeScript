class Employee2{
    
    // Constructor
    // If we add public access modifier to the constructor arguments, then those variables will become instance var automatically.
    // So we need not specify them outside constructor.
    constructor(public name: string, public address: string,public salary: number){
        
    }

    show(): void{
        console.log(`Name of Employee is ${this.name}`);
        console.log(`Address of Employee is ${this.address}`);
        console.log(`Salary of Employee is ${this.salary}`);
    }
}

let emp4 = new Employee2("Ramesh","Delhi",12000);
emp4.show();

// We can access all the public variables from here also.
console.log(emp4.name);
console.log(emp4.address);
console.log(emp4.salary);