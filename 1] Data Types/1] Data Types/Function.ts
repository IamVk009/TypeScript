let x:number = 10;

// Need to define data type for parameters of a function as Ts is a strongly typed language otherwise they r considered as of type "any".
function f1(id:number,name:string){
    console.log(id);
    console.log(name);
}
// We cannot pass any extra argument or argument of other than specified data type for a function which is being called.  
f1(100,"Ram");