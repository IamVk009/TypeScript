// Arrays are typed in TypeScript.

// Here we have defined number array so only numbers can be assigned to this array.
let aray:number[];
// let aray:Array<String>

aray = [10,20,30,40];

console.log(aray);

console.log("----------------------------------------------------------------------------------------------");
// Accessing individual element from array.
// For loop - 1
for(let x in aray){
    //console.log(x);
    console.log(aray[x]);
}

console.log("----------------------------------------------------------------------------------------------");

//String Array
let aray1:Array<String>;

aray1=["abc","cde","hra"];

console.log(aray1);

console.log("----------------------------------------------------------------------------------------------");

//For loop - 2
for(let i = 0;i<aray1.length;i++){
    console.log(aray1[i]);
}

console.log("----------------------------------------------------------------------------------------------");

// Tuple allows to define element number and element types for an array.

let tup1:[number,number,String,number];

tup1 = [10,20,"Flash",30];

console.log(tup1);