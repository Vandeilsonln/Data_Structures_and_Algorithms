// binary search

function bynarySearch(arr, val){
    let min = 0
    let max = arr.length - 1

    while (min <= max){
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle]

        if (currentElement < val){
            min = middle + 1
        } else if (currentElement > val){
            max = middle - 1
        }
        else {
            return middle
        }
    }
    return -1
}


console.log(bynarySearch([1,2,3,4,5,6,7,8,9,10,11,22,33,44], 6))