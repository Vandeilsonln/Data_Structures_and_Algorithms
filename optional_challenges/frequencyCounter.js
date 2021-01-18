function frequencyCounter(num1, num2){
    n1 = num1.toString()
    n2 = num2.toString()

    if(n1.length !== n2.length){
        return false
    }

    let fc1 = {}
    let fc2 = {}

    for (let i of n1){
        fc1[i] = ((fc1[i] || 0) + 1)
    }

    for (let j of n2){
        fc2[j] = ((fc2[j] || 0) + 1)
    }

    for (let key in fc1) {
        if(!(key in fc2)){
            return false
        }
        if(fc2[key] !== fc1[key]){
            return false
        }
    }
    return true
}

console.log(frequencyCounter(123456789, 9876543215))