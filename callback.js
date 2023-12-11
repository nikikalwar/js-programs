//asynchronous operation
//used with settimeout to execute some code 
setTimeout(()=>{
    console.log("It is used to schedule a function call")
})

//callbacks are often used to handle events in web development,like events, form submission or keyboard events
// document.getElementById('myButton').addEventListener('click',function(){
//     console.log("button clicked")
// })

//array iteration -- functions like forEach,map,filter  or reduce can callbacks to perform operations on array elements
const numbers = [1,2,3,4,5];
const doubled = numbers.map(function(item,index){
    return item*2;
});
console.log(doubled)
const tripled = numbers.forEach((item,index)=>item*3);
console.log(tripled,"tripled"); // undefined tripled //why? because item 

//used with promise to get the result 
// somePromiseFunction().then(function(result){
//     //do something with the result
// }).catch(function(error){
//     //handle error
// })

//iterating through object properties : callbacks can be used while iterating object properties
//Object.keys(person).forEach(function(key)) ,Object.entries
const person = {
    name:'Niki',
    age:28
};

Object.keys(person).forEach(function(key){
    console.log(key,person)
});

function validateInput(input,callback){
    if(input===""){
        callback(newError("Input can not be validated"))
    }
    else {
        callback(null,"Input is valid")
    }
}

validateInput("someValue",function(err,message){
    if(err){
        console.log("Error",err.message)
    } else {
        console.log("validation successful",message)
    }
})



//callbacks in higher order functions : functions that accept other functions as arguments or return functions

// function higherOrderCallback(){
//     //do something
//     callback();
// }

// higherOrderFunction(function(){
//     console.log("calling inside a higher order function")
// })

//custom callbacks: using custom callbacks to execute a specific logic when needed
function fetchDatafromServer(callback){
    //fetch data from server
    let data ="Hi" //fetched
    callback(data)
};

fetchDatafromServer(function(data){
    console.log("Data received",data)
});

//control flow : callbacks are utilized in control flow mechanisms like "async" libraries 
//or libraries like async.js for managing flow control in asynchronous operation
async.series([
    function(callback){
        //do something
        callback(null,result)
    },
    function(callback){
        //do something else
        callback(null,anotherResult)
    }
], function(err,result){
    //handle results or errors
    
})



