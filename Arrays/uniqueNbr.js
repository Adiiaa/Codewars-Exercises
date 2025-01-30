function getNbr(arr){
    return arr.filter(num=>arr.indexOf(num)===arr.lastIndexOf(num))[0]
}
console.log(getNbr([1,2,2,2,2]))