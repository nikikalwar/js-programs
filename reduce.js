//const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];
//program to count the occurances
//solution 1

const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];
const nameCount = names.reduce((acc,name)=>{
    acc[name] = (acc[name] || 0) + 1;
    return acc;
},{})
console.log(nameCount);
//another solution 2 --for each
let counts = {};
const countArr = names.forEach((item,index)=>{
counts[item]?counts[item]=counts[item]+1:counts[item]=1
})
console.log(counts);

//flatten an array using reduce
const arrays = [[1,2],[3,4],[5,6]];
const flattenedArrays = arrays.reduce((acc,currentValue)=>acc.concat(currentValue,[]));
console.log(flattenedArrays);



//using reduce
const nestedNumbers = [[1, 2], [3, 4], [5, [6, 7]]];
const flatt = nestedNumbers.reduce((acc,currentValue)=>Array.isArray(currentValue)?currentValue.reduce((a,b)=>acc.concat(...currentValue),[]):acc.concat(currentValue),[]);
console.log("flatt",flatt);

//another solution to this problem -- using recursion
function flat(arr){
    let flattened = [].concat(...arr);
   return flattened.some((item)=>typeof item === 'object')? flat(flattened): flattened;
   // return flattened
}
//console.log(flat([[1, 2], [3, 4], [5, [6, 7]]]),"flattened array");

//counting the number of occurances 
const personNames = ["niki","shivam","suraj","shivam","niki"];
let personCount = personNames.reduce((acc,currentValue)=>{
    acc[currentValue]=(acc[currentValue] || 0) + 1;
    return acc;
},{})
console.log(personCount,"person count here");

//reversing a string
const str = "nitin";
const reversed = str.split("").reduce((acc,currentValue)=>currentValue+acc,'');
console.log("reversed",reversed)
const reversed2 = str.split("").reduce((acc,currentValue)=>{
    console.log(currentValue,acc);
    return currentValue+acc
},'');

console.log("reversed2",reversed2)

//removing duplicates from an array;

let numbers = [1,2,2,3,4,4,5];
let uniqueNumbers = numbers.reduce((acc,currentValue)=>{
    if(!acc.includes(currentValue)){
            acc.push(currentValue)
    }
    return acc;
},[]);

console.log(uniqueNumbers,"unique numbers here");

//custom reducer function

let number2 = [1,2,3,4,5];
const customReducer =  (acc,currentValue)=>{
    if(currentValue%2===0)  acc.even.push(currentValue);
    else acc.odd.push(currentValue);
    return acc;
}
const groupedNumbers = numbers.reduce(customReducer,{ even:[], odd:[]})

console.log(groupedNumbers,"grouped numbers")













