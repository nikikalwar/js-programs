//first simple usage
setTimeout(()=>{
    console.log("the code will be executed after 2 seconds")
},2000)

//passing parameters
const greet = (name) =>{
    console.log(`Hello,${name}`)
}

setTimeout(greet,3000,"Niki");

//using a function reference
function displayMessage(){
    console.log("this message appears after one second")
}

setTimeout(displayMessage,1000);

//clearTimeout
let timeout = setTimeout(()=>{
    console.log("this wont execute")
})
clearTimeout(timeout);
clearTimeout(timeout);

//recurrring execution with setInterval


