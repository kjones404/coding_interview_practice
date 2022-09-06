/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

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

// loop through every odd number after 2
// if prime add to answer until max number reached
function sumPrimes(n) {
    let answer = 2
    for (let i = 3; i < n; i += 2) {
        if (isPrime(i)){
            answer = answer + i
        }
    }
    return answer

}

console.log(sumPrimes(2000000))