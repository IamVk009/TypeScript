// Function Declaration in TS.

function f1(fname:string,lname:string):void{
    console.log(fname);
    console.log(lname);
}

f1("Bhuvaneshwar","Kumar");

console.log("----------------------------------------------------------------------------------------------");

// Optional parameter in function in TypeScript.
// Just add question mark (?) after the parameter to make it optional.
// Optional parameter should be the last parameter of a function.
// Here lname is a optional parameter.

function f2(fname:string,lname?:string):void{
    console.log(fname);
    console.log(lname);
}

f2("Bhuvaneshwar");

console.log("----------------------------------------------------------------------------------------------");

f2(undefined);

console.log("----------------------------------------------------------------------------------------------");

// Both parameter can be optional.

function f3(fname?:string,lname?:string):void{
    console.log(fname);
    console.log(lname);
}

f3("Bhuvaneshwar","Kumar");

console.log("----------------------------------------------------------------------------------------------");

f3(undefined,"Kumar");

console.log("----------------------------------------------------------------------------------------------");

f3();