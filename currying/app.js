//Function currying is a technique in functional programming where a function with multiple
//arguments into a sequence of nested functions,each function with only a single argument
//the result is a chain of functions and responsible for taking one arguments and returning another
//function until all arguments are fulfilled, ultimately producing the final result

//normal function with multiple arguments
function multiply(a,b,c){
    return a*b*c;
}

//curried version
function curriedMultiply(a){
    return function (b){
        return function (c){
            return a*b*c;
        }
    }
};

console.log(curriedMultiply(2)(3)(4)) ;//output:24

//programs demonstrating Function currying
function add(a){
    return function(b){
        return a+b;
    }
}

console.log(add(5)(3));

//currying for calculation
function power(x){
    return function(y){
        return Math.pow(x,y)
    }
}

const square = power(2);
console.log(square(3));

//filtering with currying
function filterByType(type){
    return function(array) {
        return array.filter(item=>typeof item === type)
    }
}

const filterNumbers = filterByType('number');
const numbersOnly = filterNumbers(['apple',1,"orange","banana",2]);
console.log(numbersOnly);

//chaining curried functions
function add(a){
    return function(b){
        return a+b;
    }
}

function multiply(a){
    return function(b){
        return a*b;
    }
}

const result = add(5)(3) + multiply(2)(4)
console.log(result);

//implement currency converter
function currencyConverter(rate){
    return function (amount){
        return amount * rate;
    }
}

const usdEuro = currencyConverter(0.85);
console.log(usdEuro(100));

//reusable filter currying
function filterByLength(length){
    return function(array){
        return array.filter(item=>item.length ===length)
    }
}

const filterThreeLetterWords = filterByLength(3);
const words = filterThreeLetterWords(['cat','dog','elephant','bat']);
console.log(words);




