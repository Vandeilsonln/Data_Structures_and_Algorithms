// same([1, 2, 3], [4, 1, 9]) -- true
// same([1, 2, 3], [1, 9]) -- false
// same([1, 2, 1], [4, 1, 4]) -- false (must be same frequency)

function same(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght)
    {
        return false
    }

    for (let i=0; i < arr1.lenght; i++)
    {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1)
        {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

console.log(same([1, 2, 3], [1, 4, 9]))