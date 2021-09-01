// If a class is following the contract of an interface then that class obj will be considerard as the implementation of that interface.
// This class need not implement that interface.
// One interface can extend one or more interface also.(Same as in Java)
// One class can implement one or more interfaces also.(Same as in Java)
interface Person2{
    name:string;
    id:number;
    address:string;

    introduceYourself():void;

}

// The User class implements interface Person2.
class User implements Person2{

    name:string;
    id:number;
    address:string;

    introduceYourself():void{
        console.log("Inside introduceYourself function in User class");
    };

}

// Even though if user class does not implement the Person2 interface but still if it has all the members from the interface then
// the object of this interface is considered as implementation of the Person2 interface.
// But using "implements" keyword is recommended to avoid naming errors.

class User1{

    name:string;
    id:number;
    address:string;

    introduceYourself():void{
        console.log("Inside introduceYourself function in User1");
    };

}

// If User class is not implementing Person2 interface.
let u1:User = new User();
u1.introduceYourself();

// If User class is implementing Person2 interface or having same members as of Person2 interface.
let u2:Person2 = new User();
u2.introduceYourself();

let u3:User1 = new User1();
u3.introduceYourself();

let u4:Person2 = new User1();
u4.introduceYourself();