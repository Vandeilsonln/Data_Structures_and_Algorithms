function fib(numLimit){
    if(numLimit <= 2) return 1
    return fib(numLimit-1) + fib(numLimit -2)
}

console.log(fib(50))