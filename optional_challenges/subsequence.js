function isSubsequence(sub, full){
    var i = 0
    var j = 0

    if(!sub) return true
    while(j < full.length) {
        if (full[j] === sub[i]) i++
        if (i === sub.length) return true
        j++
    }
    return false
}

console.log(isSubsequence('hello', 'hello world'))