"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(roll, name, marks) {
        this.roll = roll;
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.display = function () {
        console.log("Roll no is " + this.roll + ", Name is " + this.name + ", Marks are " + this.marks);
    };
    return Student;
}());
exports.Student = Student;
