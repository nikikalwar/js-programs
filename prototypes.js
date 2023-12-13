// //modifying built in objects:
// //adding a method to the Array prototype

// Array.prototype.sum = function(){
//     return this.reduce((acc,curr)=>acc+curr)
// };

// const numbers = [1,2,3,4,5];
// console.log(numbers.sum());

// let url = "https://swapi.dev/api/people/1";
// String.prototype.fetchData = async function(url){
//     let data = await fetch(url);
//     data = await data.json();
//     console.log(data)
//    // return fetch(url);
// };

// //url.fetchData(url);

// let secondUrl = 'https://swapi.dev/api/vehicles/30/';
// secondUrl.fetchData(secondUrl);

// //used for prototype delegation

// const parentObj = {
//     //creating objects with shared prototypes
//     greet:function(){
//         return 'Hello!';
//     }
// }

// const child = Object.create(parentObj);
// console.log(child.greet()) ; //outputs hello

//method oveririding:

//parent constructor function
function Vehicle() {}
Vehicle.prototype.drive = function(){
    return 'Driving vehicle...'
}

//child constructor function overiding the parent method
function Car(){}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.drive = function(){
    return 'Driving car....'
}

const myCar = new Car();
console.log(myCar.drive());

//Reducing memory footprint: 
//creating multiple instances with shared methods through prototypes

function Book(title){
    this.title = title;
}

Book.prototype.getTitle = function(){
    return this.title;
}

const book1 = new Book('JavaScript Guide');
const book2 = new Book('HTML basics');

console.log(book1.getTitle());
console.log(book2.getTitle());

//console.log(typeof null === typeof {}) //true
//extending Functionality
//extending string Object protoypes with custom method 
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

const sampleString = 'hello';
console.log(sampleString.reverse())

//Using prototype chain for object inspection:
//checking object's propery existence through prototype chain
const obj = {
    name:'John'
}

console.log('name' in obj)
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('toString')); //outputs false

//Managing default values
//setting default values using prototype chaining
function Product(name,price){
    this.name = name || 'Default name';
    this.price = price || 0;
}

const product1 = new Product();
console.log(product1);

const product2 = new Product('PHONE',800);
console.log(product2);

//prototype for polyfilling
//polyfilling  a method if it doesn't exist

if(!object.values){
    Object.values = function(obj){
        return Object.keys(obj).map(key=>obj[key])
    }
}

const exampleObj = {a:1,b:2,c:3};
console.log(Object.values(exampleObj)) ;//outputs:[1,2,3];

//14. prototype for event handling
//using prototype for event handling

function EventTarget(){
    this.listeners  = {};
}
EventTarget.prototype.addEventListener = function (type,callback){
    this.listeners[type] = this.listeners[type] || [];
    this.listeners[type].push(callback);
}

EventTarget.prototype.dispatchEvent = function(event){
    if(this.listeners[event.type]){
        this.listeners[event.type].forEach(callback=>callback(event))
    }
}

//usage 
const button = new EventTarget();

button.addEventListener("click",function(){
    console.log("button clicked")
});

button.dispatchEvent({type:'click'}) ;

//managing shared state through prototype
function Counter(){
    Counter.prototype.count = 0;
    Counter.prototype.increment = function(){
        return ++this.count;
    }
}

const counter1 = new Counter();
console.log(counter1.increment());

const counter2 = new Counter();
console.log(counter2.increment());


//implementing custom iterator
function CustomIterator(start,end){
    this.start = start;
    this.end = end;
}

CustomIterator.prototype[Symbol.iterator] = function(){
    let currentValue = this.start;
    const self = this;
    return {
        next(){
            if(currentValue<= self.end){
                return { value:currentValue++,done:false}
            }
            else{
                return {done:true}
            }
        }
    }
}

const iterator = new CustomIterator(1,5);
for(let val of iterator){
    console.log(val)
}
