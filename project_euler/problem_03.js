/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function largestPrime(n){
    let i = 2
    while (i <= n){
        if (n % i === 0 ){
            n = n / i
        } else {
            i += 1
        }
    }
    return i
}

console.log(largestPrime(600851475143))

/*
Note: 
when you find a factor of n, divide n by the factor and
increase i by 1 keep going until i = n
*/