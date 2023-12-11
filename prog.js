setTimeout(()=>{
    console.log("Hi")
},2000) //callback

fetch('https://www.google.com').then(()=>{
    console.log("call back executed")
}) //microtask queue

setTimeout(()=>{
    console.log("2nd Hi")
},0) //callback 

// for(let i=0;i<10000000000;i++){
//     console.log(i);
// }