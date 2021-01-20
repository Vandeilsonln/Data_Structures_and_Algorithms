function isSubsequence(sub, full){
    let result = full.includes(sub)
    return result
}

console.log(isSubsequence('hello', 'hello world'))