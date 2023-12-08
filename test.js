// // var a;
// // console.log(a) ; //undefined
// // function foo(){
// //     var msg = "hello"
// //     console.log(a); //undefined
// //     console.log("Hi");
// //     function foobar(){
// //         return msg;
// //     }
// // }
// // let ab = foo();
// // console.log(ab.foobar())
// //  a = 10;
// //  /[a-z]/.test('hello');
 
//  let arr = [1,2,3,4,5];
//  console.log(...arr);

//  function test(...args){
//     console.log(args);
//  }

//  test(1,2,3,4,5);

//  class PersonName {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//      greet(){
//         return console.log(`Hi ${this.name}, Goodmoring `)
//     }
//  }

//  let obj = new PersonName("Niki","Sah");
// console.log(obj);
// obj.greet()

//promise

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        resolve("Niki")
//     },3000)
// });

// promise.then((res)=>{
//     console.log(`hi ${res}, goodmorning`)
// })

//palindrome

// function detect(str){
//     let s = str;
//     s= s.split("").reverse();
//     s = s.join("");
//     if(s===str) console.log("palindrome");
//     else console.log("not palindrome")
// }

// detect("niki");
// detect("abc");
// detect("nitin");

//detect number of vowels in input string

let str = "I am a lazy fox in a jungle";
let counts = {};
str = str.toLowerCase();
str.split("").forEach((item,index)=>{
    if(item==="a" || item === "e" || item ==="i" || item ==="o" ||item ==="u"){
        counts[item]?counts[item] = counts[item]+1:counts[item]=1
    }
});
console.log(counts)






 
