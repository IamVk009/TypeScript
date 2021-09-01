// If a class is following the contract of an interface then that class obj will be considerard as the implementation of that interface.
// This class need not implement that interface.
// The User class implements interface Person2.
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.introduceYourself = function () {
        console.log("Inside introduceYourself function in User class");
    };
    ;
    return User;
}());
// Even though if user class does not implement the Person2 interface but still if it has all the members from the interface then
// the object of this interface is considered as implementation of the Person2 interface.
// But using "implements" keyword is recommended to avoid naming errors.
var User1 = /** @class */ (function () {
    function User1() {
    }
    User1.prototype.introduceYourself = function () {
        console.log("Inside introduceYourself function in User1");
    };
    ;
    return User1;
}());
// If User class is not implementing Person2 interface.
var u1 = new User();
u1.introduceYourself();
// If User class is implementing Person2 interface or having same members as of Person2 interface.
var u2 = new User();
u2.introduceYourself();
var u3 = new User1();
u3.introduceYourself();
var u4 = new User1();
u4.introduceYourself();
