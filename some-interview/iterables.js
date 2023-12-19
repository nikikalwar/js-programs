//given the object remove the key value pairs which have key as a number
let obj = {
    a:'cat',
    b:'mouse',
    1:1,
  //  d:'country',
    3:4
}
let index =0;
for(const item in obj){
    if(typeof parseInt(item)!== 'NaN') delete obj[index];
    index++;
};

console.log(obj)




