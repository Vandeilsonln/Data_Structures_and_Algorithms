// ([1,2,3], 2.5) - true
// ([-1,0,3,4,5,6], 4.1) - false
// ([], 4) - false

function averagePair(arr, avg){
    let first = 0
    let second = 1
    let tempSum = arr[0] + arr[1]

    if(arr.length < 2) return false

    for (let i = 0; i < arr.length - 2; i++){
        tempSum = tempSum - arr[i] + arr[i+2]
        if (tempSum/2 === avg)
        {
            return true
        }
    }

}

averagePair([1, 20, 3, 40, 5], 2)