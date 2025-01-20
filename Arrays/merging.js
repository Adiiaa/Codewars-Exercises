// Write a function that merges two sorted arrays into a single one. 
// The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
 function mergeArrays(arr1,arr2){
    let c = [...arr1,...arr2]
    let d = new Set(c)
    return Array.from(d).sort((a,b)=>a-b)
 }
 let arr1 = [1,2]
 let arr2 = [5,3]
 console.log(mergeArrays(arr1,arr2))