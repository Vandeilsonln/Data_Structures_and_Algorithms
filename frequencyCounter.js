// same([1, 2, 3], [4, 1, 9]) -- true
// same([1, 2, 3], [1, 9]) -- false
// same([1, 2, 1], [4, 1, 4]) -- false (must be same frequency)

function same(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght)
    {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true
}

console.log(same('qwerty', 'ytrewq'))