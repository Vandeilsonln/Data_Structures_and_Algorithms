function binarySearch(sortedArr, num){
    let left = 0
    let right = sortedArr.length - 1
    var middle = Math.floor((left + right)/2)

    while(sortedArr[middle] !== num && left <= end){
        if(num < sortedArr[middle]){
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.floor((left + right)/2)
    }
    if(sortedArr[middle] === num) return middle
    else return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 105))