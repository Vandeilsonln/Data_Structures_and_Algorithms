function pivot(arr, start=0){
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

function quickSort(arr, left=0, right=arr.length-1){
    if (left < right){
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, right=pivotIndex-1)    // left
    quickSort(arr, left=pivotIndex+1, right)
    }
    
    return arr
}

let num = 100000000
var bigList = []
for (let i=0; i<num; i++){
    bigList.push(Math.random())
}
//console.log(bigList.sort())

console.log(quickSort(bigList))