/*

Need of an Interface =>
------------------------
> Interface is needed to acheive the data abstraction.

> By using abstract class, we can hide a implementation of a particular part or method of a class.

> But by using interface we can hide the implmentation of all the methods.

> By using interface our application will become more loosely coupled i.e. if our application depends on the interface then we can change any
  implementation without touching the code of an application just by changing the code within implementation classes of interface.



// Interface with function

> Interface in typescript does not get compiled to Js

> It help the programmer only during develpment phase to detect compile time error

> It will be totaly ignored when converting Ts code to Js code.

*/

function f5(object:any){
    console.log(object.name);
}

function f4(object:any){
    console.log(object.name);
}

let obj = {
    id:100,
    name: "Ranvir"
}

let obj2 = {
    fname: "Ram"
}

f5(obj);
f4(obj2);

// Above code works perfect since objects are having name property which is required by the functions.
// But if object has "fname" instead of "name" then it will not print the expected output.
// By using interface we can solve this issue.

console.log("----------------------------------------------------------------------------------------------");

interface Person{
    name: string;
    // We can also use optional parameter in interface.
    address?: string;
}

// Need to pass an object of type person so that it will check if there is a value in object of specified data type in interface.
function f6(object:Person){
    console.log(object.name);
}

function f7(object:Person){
    console.log(object.name);
}

f6(obj);
// Due to interface it will give error at compile time only because obj2 don't have "name" field with type string.
//f7(obj2);

console.log("----------------------------------------------------------------------------------------------");

// We can use methods within interface.
interface Person1{
    name: string;
    // This method should be implemented by the objects in order to used by functions.
    introduce(lastname:string):void;
}

function f8(object:Person1){
    console.log(object.name);
    object.introduce("Kumar");
}

function f9(object:Person1){
    console.log(object.name);
}

let obj3 = {
    id: 100,
    name: "Ranvir",

    introduce(lastname: string):void{
        console.log(lastname);
    }
}

let obj4 = {
    fname: "Ram"
}

f8(obj3);
// As obj4 don't have "introduce" method within it so it can't be accepted by f9().
// f9(obj4);

