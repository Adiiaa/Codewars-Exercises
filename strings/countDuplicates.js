// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function counting(str){
    // let str = "adia"
    let arr = str.toLowerCase().split('')
    
    let count = new Set(arr.filter((value)=>arr.indexOf(value)!==arr.lastIndexOf(value)))
    return count.size;

}
console.log(counting("Adia"));