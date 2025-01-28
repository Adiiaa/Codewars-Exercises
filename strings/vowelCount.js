// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){
    let v = "aeuio"
    let a = str.split('')
    let b = a.filter(char=>v.includes(char)).length
        return b
}
let str = "hello"
console.log(getCount(str))