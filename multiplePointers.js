function countUniqueValues(arr) {
    let left = 0;
    let right = 1;
    let total = 0;

    while(right <= arr.length) {
        if (arr[left] === arr[right]) {
            right++
            continue
        } else {
            total++
            left = right
            right++
        }
    }
    return total
}

console.log(countUniqueValues([-3, -2, -1, 0, 6, 1, 1,  2, 8, 4]))