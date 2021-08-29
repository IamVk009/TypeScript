// Class declaration.
var Employee = /** @class */ (function () {
    // Constructor
    function Employee(name, address, salary) {
        this.name = name;
        this.address = address;
        this.salary = salary;
    }
    Employee.prototype.show = function () {
        console.log("Name of Employee is " + this.name);
        console.log("Address of Employee is " + this.address);
        console.log("Salary of Employee is " + this.salary);
    };
    return Employee;
}());
var e = new Employee("Ramesh", "Delhi", 12000);
e.show();
