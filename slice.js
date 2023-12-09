//program to show shallow copy using slice()

// const originalArray = [{id:1,name:'Niki'},{id:2,name:"peter"},{id:3,name:"louis"}];
// const copiedArray = originalArray.slice(); //creates a shallow copy
// console.log(copiedArray,originalArray);
// copiedArray[0].randomValue=8;
// console.log(copiedArray,originalArray);

//slicing an array-like object

function example(){
    const slice = Array.prototype.slice.call(arguments);
  //  const slice2 = Array.from(arguments);
  //  console.log(slice2)
    return slice;
}
//console.log(example(1,2,3,4));

//copying an entire array :
const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = arr1.slice();
//console.log(arr2);

//the same copy using reduce function
const arr3 = arr1.reduce((acc,currentValue)=>{
    acc.push(currentValue);
    return acc
},[]);
//console.log(arr3,"arr3");

//getting the last three elements
let arr4 = arr1.slice(-3);
console.log(arr4,"arr4");

//extracting just one element
let arr5 = arr1.slice(2,3); //first argument is start number and the second is end number (end index)
console.log(arr5,"arr5");

//handling negative indexes
const numbers = [1,2,3,4,5];
const negative=numbers.slice(-4,-3);
console.log("negative",negative);

//using slice with strings
const str = "Hello, world";
const slicedString = str.slice(7);
console.log(slicedString);



