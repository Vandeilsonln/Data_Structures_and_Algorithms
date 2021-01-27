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
let arr = []
let count = 50000
for (let i =0; i <= count; i++){
    arr.push(Math.random())    
}
console.log(bubbleSort(arr))