// (1, 2, 3) - false
// (1, 2, 2) - true

function areThereDuplicates(...numbers){
    let data = {}

    for (value of numbers){
        if (data[value] === 1) return true
        data[value] ? data[value] += 1 : data[value] = 1
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 1))