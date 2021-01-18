function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null
    }

    var max = -Infinity
    for (let i=0; i < arr.length - num+1; i++){
        temp = 0
        for (let j=0; j<num; j++){
            temp += arr[i+j];
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}


console.log(maxSubArraySum([1,2,3,4,5,6,7,8,9,10,7],2))