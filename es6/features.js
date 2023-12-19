//top features of es6

//1.object destructuring

const person ={
    id:1,
    name:'Niki',
    email:'sometestmail'
}

const {id,name,email} = person;
console.log(id,name,email);

//2. Array destructuring
let arr = [1,2,3,4]
const [firstValue, secondValue,,fourthValue] = arr;
console.log(firstValue,secondValue,fourthValue)

//3. Rest parameters 
//want to bind few of the variables to a single variable
//instead of function currying we can use this with reduce to return the sum for //an infinte number of arguments

function add(...c){
    console.log(...c);
   c = c.reduce((acc,prev,currIndex)=>{
        acc=acc+prev;
        return acc;
    },0)
     console.log(c);
     return c
}
add(1,2,3,4,5,6,7,8,9);

//4.create shallow copy with spread
{
    let arr = [1,2,3,4];
    let copiedArr = [...arr];
    console.log(copiedArr,arr);
    copiedArr[0]=5;
    console.log(copiedArr,arr);
    
    let objArr = [{id:1,name:'Niki'},{id:2,name:'Sah'}];
    let copiedObjArr = [...objArr];
    console.log(objArr,copiedObjArr);
    //if we change the obj as a whole the changes wont be reflected;
    //change a value say id value
    copiedObjArr[0].id = 10;
    console.log(objArr,copiedObjArr)
}

//5. default function parameters
{
    function sayDefault(name='Niki'){
        console.log(name, "Name is here")
    }
    
    sayDefault();
}

//6. Template Strings
{
    let name = 'Niki';
    console.log(`Hi from ${name}`)
}

//7. Enhanced Object literals
// we can define fields with variable assignments with the same name
//define functions
//define dynamic computed values

{
    let color = "red";
    let obj = {
        name:'Niki',
        color,
        greetMe(){
            console.log(`Hi from greetMe ${name} and today's color is ${color}`)
        },
        ["prop"+42]:42
    }
    obj.greetMe()
    console.log(`the computed value for`,obj.prop42)
}

//8. Classes --
{
    class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    printPerson(){
        console.log(`person name is ${this.name} with age ${this.age}`)
    }
}

class SomeTestCase extends Person{
}

class SecondTestCase extends SomeTestCase {
    
}
let newObj = new SomeTestCase('Niki',29);
console.log(newObj,"new Obj");
newObj.printPerson();
let secondObj = new SecondTestCase('Sah',30);
console.log(secondObj,"secondObj");
secondObj.printPerson();

}

//9. Arrow functions
    const arrowFunctionExample = () => {
        console.log("Arrow Arrow")
    }

//10. Array helper functions --
// forEach, map, filter, reduce, find, some, every
//to lazy to add

//11. let and const variables

//12. promises

//13. Async/await keyword