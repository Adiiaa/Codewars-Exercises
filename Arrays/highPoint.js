// Write a function that returns both the minimum and maximum number of the given list/array.

function minAndMax(arr){
    let c = []
    let a = Math.min(...arr)
    c.push(a)
    let b = Math.max(...arr)
     c.push(b)

     return c
    
}
let arr = [1,2,3,4]
console.log(minAndMax(arr))