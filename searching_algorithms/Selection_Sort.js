function selectionSort(arr){
    const swap = (arr, idx1, idx2) => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    }
    for (let i = 0; i < arr.length; i++){
        var min = i
        for (let j = i +1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }

        if (i !== min) swap(arr, i, min)
        }    
    
    return arr
}

console.log(selectionSort([1,5,4,9,7,3,8,1,6,2,5,10,98,46,35,87,45,62,15]))