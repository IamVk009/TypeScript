
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";

})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek);
console.log(DaysOfWeek.MON);
console.log(DaysOfWeek.TUE);
console.log(DaysOfWeek[1]);
console.log(DaysOfWeek[2]);
console.log("----------------------------------------------------------------------------------------------");

var day;
day = DaysOfWeek.MON;

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
