//usage example for promise

const myPromise = new Promise((resolve,reject)=>{
    //simulate a timeout
    setTimeout(()=>{
        resolve("Niki")
    },1000)
})

myPromise.then(response=>console.log(response));
myPromise.catch(err=>console.log(err));

//constructor functions are functions that are used to create objects and are used to define properties and methods
//for an object

function Person(name,age){
    this.name = name;
    this.age = age;
}