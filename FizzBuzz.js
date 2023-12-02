function Fizzbuzz(n){
    if (n % 3 == 0 && n % 5 === 0){
        return "FizzBuzz"
    }else if (n % 3 === 0){
        return "Fizz"
    }else if (n % 5 === 0){
        return "Buzz"
    }else{
        return null
    }

}

for (let i = 0; i < 51 ; i++){
    if (Fizzbuzz(i) == null) {
        console.log(i)
    }
    else{
        console.log(Fizzbuzz(i))
    }
} 