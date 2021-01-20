function minSubArrayLen (arr, num){
    tempLen = 0

    for (let i=0; i < arr.length; i++)
    {
        tempLen += arr[i]
        if (tempLen > num) return tempLen
    }
    return false
}


console.log(minSubArrayLen([2, 3, 1, 5, 7, 2, 1, 6], 7))