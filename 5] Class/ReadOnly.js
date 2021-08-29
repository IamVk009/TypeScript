var Employee3 = /** @class */ (function () {
    function Employee3(name, address, salary) {
        this.name = name;
        this.address = address;
        this.salary = salary;
        // Readonly modifier is used to make variable vale to be fixed.
        this.x = 100;
        // We can change the value of readonly variable from function.
        this.x = 200;
    }
    Employee3.prototype.show = function () {
        console.log("Name of Employee is " + this.name);
        console.log("Address of Employee is " + this.address);
        console.log("Salary of Employee is " + this.salary);
        // We can't change the value of readonly variable from function.
        // this.x = 2000;
    };
    return Employee3;
}());
var emp5 = new Employee3("Ram", "Delhi", 10000);
console.log(emp5.x);
