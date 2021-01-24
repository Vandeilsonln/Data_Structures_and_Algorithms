function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

console.log(insertionSort([1,2,5,7,84,45,65,24,32,12,64,56,97,89]))