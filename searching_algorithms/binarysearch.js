function binarySearch(sortedArr, num){
    let left = 0
    let right = sortedArr.length - 1

    while (left < right){
        let middle = Math.round((left + right) / 2)
        if (num === sortedArr[middle]) return sortedArr.indexOf(num)
    
    else if (num > sortedArr[middle]) {
        left = middle
    }
    else if (num < sortedArr[middle]) {
        right = middle
    }
    
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 5))