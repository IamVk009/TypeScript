export class Student{
    constructor(private roll:number, private name:string, private marks:number){

    }

    display(){
        console.log(`Roll no is ${this.roll}, Name is ${this.name}, Marks are ${this.marks}`);
    }
}