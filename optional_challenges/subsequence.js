function isSubsequence(sub, full){
    if(sub.length === 0) return true
    if(full.length === 0) return false
    if(full[0] === sub[0]) return isSubsequence(sub.slice(1), full.slice(1))
    return isSubsequence(sub, full.slice(1))
}

console.log(isSubsequence('hello', 'hello world'))