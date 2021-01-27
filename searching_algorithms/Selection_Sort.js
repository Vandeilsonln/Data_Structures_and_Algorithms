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
let arr = []
let count = 100000000
for (let i =0; i <= count; i++){
    arr.push(Math.random())    
}
console.log(selectionSort([arr]))