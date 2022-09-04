/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

// return boolean for time number
function isPrime(n){
    let s = Math.sqrt(n);

    // check for 1, 2, or even number > 2
    if (n <= 1 ){
        return false
    } else if (n === 2 ){
        return true
    } else if (n % 2 === 0){
        return false
    }
    // check 3 and if divisable by all odd numbers up to square root
    for(let i = 3; i <= s; i += 2) {
        if (n % i === 0){
            return false
        } 
    }
    // congratulations is a prime!
    return true
}

function findPrime(n){
    let answer = 2;
    let count = 1;
    for (let i = 3; count < n; i += 2) {
        if (isPrime(i)){
            count += 1
            answer = i
        }
    }
    return answer
}


console.log(findPrime(10001))