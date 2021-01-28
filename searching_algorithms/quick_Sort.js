function pivot(arr, start=0, end=arr.length-1){
    function swap(elements, i, j){
        var temp = elements[i]
        elements[i] = elements[j]
        elements[j] = temp
    }
    var pivot = arr[start]
    var swapIdx = start

    for(var i = start + 1; i <arr.length; i++){
        if (pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

console.log(pivot([9,4,8,2,1,5,7,6,3]))