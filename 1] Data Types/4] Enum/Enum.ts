// With the enum we can create user-defined datatypes, which allows only certain set of values.
// Internally it uses the Object data type.
enum DaysOfWeek{
    SUN, MON, TUE, WED
    // We can change the sequence numbers by assigning it different values i.e. numbers or string.
    // SUN=10,MON, TUE, WED
    // SUN = "m", MON = "n", TUE = "o", WED = "p"
}

console.log(DaysOfWeek);
console.log(DaysOfWeek.MON);
console.log(DaysOfWeek.TUE);
console.log(DaysOfWeek[1]);
console.log(DaysOfWeek[2]);

console.log("----------------------------------------------------------------------------------------------");
// We should assign only defined value for variable which is using defined enum type.
let day:DaysOfWeek;

day = DaysOfWeek.MON;
//day = DaysOfWeek.TUE;

console.log(day);

console.log("----------------------------------------------------------------------------------------------");

function f1(day:DaysOfWeek){
    if(day === DaysOfWeek.MON)
        console.log("Today is a Monday");
    else
        console.log("Today is a other than Monday");
}

f1(DaysOfWeek.MON);
f1(DaysOfWeek.TUE);