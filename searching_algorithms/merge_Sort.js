// [1, 10, 50] [2, 14, 99, 100]

function merge(arr1, arr2){
    mergedArray = []
    arr1num = 0
    arr2num = 0

    while (arr1num < arr1.length && arr2num < arr2.length){
        if (arr1[arr1num] < arr2[arr2num]){
            mergedArray.push(arr1[arr1num])
            arr1num++
        } else {
            mergedArray.push(arr2[arr2num])
            arr2num++
        }
    }

    while(arr1num < arr1.length){
        mergedArray.push(arr1[arr1num])
        arr1num++
    }

    while(arr2num < arr2.length){
        mergedArray.push(arr2[arr2num])
        arr2num++
    }

    return mergedArray
}

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length /2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}


let arr = []
let count = 10000000
for (let i =0; i <= count; i++){
    arr.push(Math.random())    
}

console.log(mergeSort(arr))