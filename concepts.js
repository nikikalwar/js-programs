// //prototype chaining
// //In JavaScript, each object has a prototype
// //prototypes are like blueprints that define properties and methods that other objects can inherit
// //every object in JavaScript has a prototype except for the root object,'Object.prototype';

// let car = {
//     brand:'Maruti',
//     year:2023
// }

// car.__proto__.sayHi = function(){
//     console.log(`name and year is ${this.brand}`)
// }
// //adding a method to the prototype of the car object
// // car.prototype.sayName = function(){
// //     console.log(`name and year is ${brand}`)
// // }

// function myConstructor(name,title){
//     this.name = name;
//     this.title = title;
// }


// let newObj1 = new myConstructor('NIki','kalwar');
// myConstructor.prototype.greet = function(){
//     console.log("i there")
// }
// newObj1.greet()

// console.log(car.sayHi());

// //when a property or method is accessed on an object javascript looks for the property method
// //in the object itself. If it doesn't find it, it looks at the object's prototype. If it is still not found
// //it looks at the prototype of the prototype and so on 
// //the chain of prototypes is known as prototype chain

// //parent class
// class Vehicle {
//     constructor(fuel){
//         this.fuel = fuel;
//     }

//     start(){
//         return 'Vehicle has started'
//     }
// }

// class Car extends Vehicle {
//     constructor(brand,year,fuel){
//         super(fuel);
//         this.brand = brand;
//         this.year  = year;
//     }
// }

// //creating my instance of car
// let myCar = new Car('Toyota',2022,'gasoline');

// //accessing properties and methods from the protoype chain
// console.log(myCar.brand);
// console.log(myCar.fuel);
// console.log(myCar.start());

//to apply built in methods from one object to another
let obj1 = {
    length:3,
    0:'foo',
    1:'bar',
    2:'foobar'
};

let obj2 = { }

Array.prototype.push.call(obj1,'something');
console.log(obj1);

//using .call() with Arrays
let arr = ['apple','banana','orange'];

function logArray(){
    for(let i=0;i<arguments.length;i++){
        console.log(this[i])
    }
}

logArray.call(arr,0,1,2)







