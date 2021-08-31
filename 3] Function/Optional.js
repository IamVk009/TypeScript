
function f1(fname, lname) {
    console.log(fname);
    console.log(lname);
}
f1("Bhuvaneshwar", "Kumar");
console.log("----------------------------------------------------------------------------------------------");

function f2(fname, lname) {
    console.log(fname);
    console.log(lname);
}
f2("Bhuvaneshwar");
f2(undefined);
console.log("----------------------------------------------------------------------------------------------");

function f3(fname, lname) {
    console.log(fname);
    console.log(lname);
}
f3("Bhuvaneshwar", "Kumar");
console.log("----------------------------------------------------------------------------------------------");
f3(undefined, "Kumar");
console.log("----------------------------------------------------------------------------------------------");
f3();
