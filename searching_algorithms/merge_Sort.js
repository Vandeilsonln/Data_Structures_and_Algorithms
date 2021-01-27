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

console.log(merge([1,2,4,8], [3, 5, 7]))