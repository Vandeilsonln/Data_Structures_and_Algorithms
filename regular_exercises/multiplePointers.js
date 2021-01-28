function countUniqueValues(arr) {
    let left = 0;

    for(var right = 1; right <= arr.length; right++) {
        if (arr[left] !== arr[right]) {
            left++
            arr[left] = arr[right]
        }
    }
    return left
}

console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 5]))