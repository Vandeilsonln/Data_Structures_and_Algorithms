function bubbleSort(arr){
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }

    var noSwaps
    for (let i = arr.length; i > 0; i--){
        noSwaps = true
        for (let j = 0; j < i-1; j++){
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSort([1,2,5,4,9,25,98,57,14,99,35, 2]))