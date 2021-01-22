function fibonacci(elemento){
    if (elemento <= 1) return 1
    return fibonacci(elemento-1) + fibonacci(elemento-2)
}

for (let i=0; i < 10; i++){
    console.log(fibonacci(i))
}