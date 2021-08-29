// In order to create multiple objects with same type, we use type aliases.

type emp = {id:number,name:string}

let emp1:emp = {
    id:1,
    name: "Raj"
}

let emp2:emp = {
    id:2,
    name: "Shyam"
}

// console.log(emp);
console.log(emp1);
console.log(emp2);