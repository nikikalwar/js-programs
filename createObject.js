//different ways to create Objects
const person = {
    name:'Alice',
    age:30,
    greet:function(){
        console.log('Hello')
    }
}

person.greet() //outputs Hello;

//constructor functions
//define a new constructor function  and use the 'new' keyword to create multiple instances

function Car(make,model){
    this.make = make;
    this.model = model;
    this.displayInfo = function(){
        console.log(`Car:${this.make} ${this.model}`)
    };
}

const myCar = new Car('Toyota','Corolla');
myCar.displayInfo();


//object.create()
//creates a new Object using existing object as the prototype
//example
const personProto = {
    greet:function(){
        console.log('Hello')
    }
};

const person1 = Object.create(personProto);
person.greet(); //outputs hello

//class syntax (ES6)
//explanation: Define classes in JavaScript using the 'class' keyword

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Test extends Animal {};
const testDog = new Test('Niki');
testDog.speak();
const dog = new Animal('Dog');
dog.speak(); //outputs: dogs makes a sound

//singleton pattern
const Singleton = (function(){
    let instance;

    function createInstance(){
        const object = new Object('I am at the instance');
        return object;
    }

    return {
        getInstance:function(){
            if(!instance){
                instance = createInstance()
            }
            return instance;
        }
    }
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);

//using es6 operator
//copies properties from one object into another
//example

const obj1 = {a:1,b:2};
const obj2 = {...obj1,c:3};
console.log(obj2); //outputs: {a:1,b:2,c:3}

//using factory functions
//explanation: function that returns objects

function createPerson(name,age){
    return {
        name:name,
        age:age,
        greet:function(){
            console.log('hello',name)
        }
    }
}

const person2 = createPerson('Niki',28);
person2.greet();

//Using es6 Object.defineProperty()
//Defines  new properties directly on an object or modify existing ones

const obj = {};
Object.defineProperty(obj,'property1',{
    value:42,
    writable:false
})
console.log(obj.property1)

