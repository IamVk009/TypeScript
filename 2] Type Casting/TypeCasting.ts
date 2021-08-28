// There are two ways of type casting.
let str:any;
str = "Hello";

// Way - 1
let str1 = <string>str;
console.log(str1);

// Way - 2
let str2 = str as string;
console.log(str2);