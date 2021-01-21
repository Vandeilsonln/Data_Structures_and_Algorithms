// ([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) -> 17

function maxSubArraySum(arr, element){
    let tempSum = 0
    let maxSum = 0

    if (arr.length < element) return null

    for (let i = 0; i < element; i++)
    {
        maxSum += arr[i]
    }

    tempSum = maxSum

    for (let i = element; i <= arr.length - 1; i++)
    {
        tempSum = tempSum - arr[i - element] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

console.log(maxSubArraySum([100, 200, 300, 400, 500], 2))