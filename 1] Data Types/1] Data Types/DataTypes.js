/*
> Ts is a strongly typed language which means once we assigned a value of specific data type to a var then we can't change the data type of that var.

> Typed variables means defining variables with the data type.

Datatypes in Ts:-
-----------------

> It supports all the JS datatypes and some extra datatypes.

> Js data types :

1. number
2. string
3. boolean

> Extra Data types supported by Ts :

1. any
2. Tuple
3. Enum
4. void
5. Array

*/
var p = 10;
var q = "Hello";
var r = true;
console.log(p);
console.log(q);
console.log(r);
console.log("----------------------------------------------------------------------------------------------");
// If we want for a variables that it can act as old js variable that can hold any type of value then we should use any data type :-
var s;
s = 100;
console.log(s);
s = "Flash";
console.log(s);
s = false;
console.log(s);
console.log("----------------------------------------------------------------------------------------------");
// Tuple
// Tuple allows to define element number and element types for an array.
var tup2;
tup2 = [10, 20, "Flash", 30];
console.log(tup2);
console.log("----------------------------------------------------------------------------------------------");
