function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0
    for(let i=0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(arr){
    let maxDigits = mostDigits(arr)
    for(let i = 0; i < maxDigits; i++){
        let digitBuckets = Array.from({length:10}, () => [])
        for (let j = 0; j < arr.length; j++){
            let digit = getDigit(arr[j], i)
            digitBuckets[digit].push(arr[j])
        }
        arr = [].concat(...digitBuckets)
    }

    return arr
}

console.log(radixSort([2, 25, 978, 4567, 37, 98745, 12, 376, 1957]))