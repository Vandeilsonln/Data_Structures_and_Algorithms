function linearSearch(arr, element){
    for (let i=0; i <arr.length; i++){
        if(element === arr[i]) return i
    } 
    return -1
}

console.log(linearSearch([10, 35, 50, 90, 4], 90))