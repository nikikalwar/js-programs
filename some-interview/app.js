//[3,5,3,1,2,1,1];
//find the element with second max occurances
let arr = [3,5,3,1,2,1,1];
let arr1 = arr.sort((a,b)=>a-b);
console.log(arr1,"arr1")

let count = arr.reduce((acc,currentValue,index)=>{
    acc[currentValue]?acc[currentValue]=acc[currentValue]+1:acc[currentValue]=1;
    return acc
},{})

console.log(count,"count");

//step 1 -- get the key value pair values
let values = Object.values(count);
let keys = Object.keys(count);
console.log(values,keys);

//step 2 -- map the key values pair
const pairedArray = keys.map((item,index)=>[item,values[index]]) ;
console.log(pairedArray,"pairedArray");

//sort based on paired values
pairedArray.sort((a,b)=>a[1]-b[1]);
console.log(pairedArray,"pppp");

const db = require('mysql');

db.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:''
})

db.on('connection',(err)=>{
    if(err) throw err;
    else console.log("db connected")
})

//how to implement localization in nodejs
//check on how to modularize react components
//check how to multiple connection for db

const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('msg',()=>{
    console.log("event logged")
})

myEvent.emit('msg')
//best 
//single-threaded
//event-driven
//event loop
//thread pool 
//events
//concurrency
console.log("first");
setTimeout(() => {     
    console.log("second");
    }, 0);
console.log("third");

let styleObj = {
    `display:hidden,
    padding:20px`
}




