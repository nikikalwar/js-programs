//program to reverse a given string
// let str = "I am lazy as fox";
// str= str.split("");
// str.reverse().join("")
// //str =str.split("").reverse().join("");
// console.log(str);

// const map ={};
// const string = "Hello World";
// const array = string.split("");
// array.forEach(i => map[i] ? map[i] = map[i] + 1 : map[i] = 1);
// console.log(map)

//program to find the occurances in a string
// const map = {};
// const string = "I am lazy as fox";
// const strArr = string.split("");
// strArr.forEach(i=>map[i]?map[i]=map[i]+1:map[i]=1);
// console.log(map);

//program to remove duplicate characters
// let str = "Hello world";
// const removeDups = [...new Set(str.split(""))].join("");
// console.log(removeDups);

//how to find the maximum occuring character in given string?
// const map = {};
// let string = "hello world";
// string.split("").forEach((i)=>{
// map[i]?map[i]=map[i]+1:map[i]=1
// });
// console.log(map);

// let max = 1;
// let char = string[0];
// for(let k in map){
//     if(map[k]>max){
//         max = map[k];
//         char = k;
//     }
// }
// console.log(char,max);

//printing duplicate occurances in a string
// let string = "hello world";
// const map = {};
// string.split("").forEach(i=>map[i]?map[i]=map[i]+1:map[i]=1);
// console.log(map)

// for(let k in map){
//     if(map[k]>1){
//         console.log(map[k],k) ;//this line prints the duplicate chars
//     }
// }

//program to filter even numbers in an array
// function filterEvenNumbers(arr){
//     return arr.filter((item=>item%2==0))
// };
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(filterEvenNumbers(arr));

//program to show the functionality for the debounce function
function debounce(func,delay){
    let timer;
    return (function(){
        
        timer = setTimeout(func,delay);
       // clearTimeout(timer);
    })
}

let functionName=()=>console.log("I am printed");
debounce(functionName(),3000)


