// Purpose of abstract => User should not create the object of a class rather he should extend the class.

abstract class Animal{

    move():void{
        console.log("Animal is moving");
    }

    // abstract method can't be implemented here it should be implemented by child classes of animal.
    abstract bark():void;
}

class Dog extends Animal{
    // Dog class must implement the abstract method from Animal class.
    bark():void{
        console.log("Animal is barking");
    }
}

// We Cannot create an instance of an abstract class.
// let a = new Animal();

let d = new Dog();
d.move();
d.bark();