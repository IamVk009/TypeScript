// With the enum we can create user-defined datatypes, which allows only certain set of values.
// Internally it uses the Object data type.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";
    // We can change the sequence numbers by assigning it different values i.e. numbers or string.
    // SUN=10,MON, TUE, WED
    // SUN = "m", MON = "n", TUE = "o", WED = "p"
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek);
console.log(DaysOfWeek.MON);
console.log(DaysOfWeek.TUE);
console.log(DaysOfWeek[1]);
console.log(DaysOfWeek[2]);
console.log("----------------------------------------------------------------------------------------------");
// We should assign only defined value for variable which is using defined enum type.
var day;
day = DaysOfWeek.MON;
//day = DaysOfWeek.TUE;
console.log(day);
console.log("----------------------------------------------------------------------------------------------");
function f1(day) {
    if (day === DaysOfWeek.MON)
        console.log("Today is a Monday");
    else
        console.log("Today is a other than Monday");
}
f1(DaysOfWeek.MON);
f1(DaysOfWeek.TUE);
