class Employee3{
    
    // Readonly modifier is used to make variable value to be fixed.

    public readonly x:number = 100;

    constructor(public name: string, public address: string,public salary: number){
        // We can change the value of readonly variable from function.
        this.x = 200;   
    }

    show(): void{
        console.log(`Name of Employee is ${this.name}`);
        console.log(`Address of Employee is ${this.address}`);
        console.log(`Salary of Employee is ${this.salary}`);
        // We can't change the value of readonly variable from function.
        // this.x = 2000;
    }
}

let emp5 = new Employee3("Ram","Delhi",10000);

console.log(emp5.x);

// We can't change the value of readonly variable from outside class also.
//emp5.x =300;