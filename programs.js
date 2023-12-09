//function to reverse a string
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

//function to check a palindrome
function isPalindrome (str){
    let reversed = str.split("").reverse("").join("");
    return str === reversed;
}

console.log(isPalindrome("nitin")); //true

//count the occurance of a character in a string
let str="hello";
function countOccurances(str,char){
    const regex = new RegExp(char,'g');
    const count = str.match(regex).length;
    return {
        char:count
    };
}
console.log(countOccurances("hello",'l'));

//remove duplicates from string
function removeDuplicates(str){
    return str.split("").filter((item,index,arr)=>arr.indexOf(item)===index).join('')
}

console.log(removeDuplicates('hello')) //helo

//check for anagrams
function anagrams(str1,str2){
    const sortedStr1 = str1.split('').sort().join();
    const sortedStr2 = str2.split('').sort().join();
    return sortedStr1 === sortedStr2
}

console.log(anagrams('listen','silent'))

function isSubstring(mainString,substring){
    return mainString.includes(substring)
};

console.log(isSubstring('hello world','world'));

//program to remove white spaces from a string
function removeSpaces(str){
    return str.replace(/\s/g,'')
};
console.log(removeSpaces("i am laxy fox "));

//program to check if it's a pangram or not
function isPangram(str){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercase = str.toLowerCase();

    for(const char of alphabet){
        if(!lowercase.includes(char)){
                return false;
        }
    }
    return true;
}

function reverseOnlyVowels(str){
    const vowels = str.match(/[aeiou]/gi);
    return str.replace(/[aeiou]/gi, ()=> vowels.pop())
};

console.log(reverseOnlyVowels("hello"));
