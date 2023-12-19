// //discussion on usage of let,var and const variables
// function example(){
//     let x = 10;
//     if(true){
//         let y = 20;
//         console.log(x); //accessible : 10
//         console.log(y); //accessible : 20 
//     }
//     console.log(x); //accessible:10
//     console.log(y); //error: y is not defined(block-scoped)
// }

// //prevent variable hoisting:
// console.log(a); //output: undefined
// var a = 5;

// console.log(b);
// let b = 10;

// //Reassigning values
// let count = 5;
// count = 10; //allowed reassinging value

// //4. iteration scoping in loops
// for(let i = 0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

// //redefining variables in different scopes
// let message = 'hello';
// {
//     let message = 'Hi';
//     console.log(message); //output Hi
// }
// console.log(message); //output: Hello (outer scope)

// //constants with let;
// const PI = 3.14;
// //PI = 3.14159

// student.name = {
//     name:'Alice'
// }

// student.name = 'Bob';
// console.log(student.name);

//declaring variables without initialization
let value;
console.log(value);

//function scoping
function example(){
    let localVar = 20;
    if(true){
        console.log(localVar) ;//accessible 20
    }
    console.log(localVar)
}

//declaring multiple variables
let name = 'Alice',age = '30', country = 'Wonderland';

let arr = [1,2,3,4,5];
arr.forEach(item=>console.log(item));

for(const num in arr){
    console.log(num)
}

for(const num of arr){
    console.log(num,"num here")
}

let obj = {
    a:'cat',
    b:'mouse',
    1:1,
  //  d:'country',
    3:4
}

for(const num in obj){
    console.log(num) ;//basically if you want to iterate over an object use in method
}




