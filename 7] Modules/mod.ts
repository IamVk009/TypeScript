// This file will become module when we export any one of its element.

export let n:number = 200;

export function fun(name:string){
    console.log(`Hello ${name}`);
}

export class Employee4{
    showMsg():void{
        console.log("This is showMsg function from Employee4 class.")
    }
}
