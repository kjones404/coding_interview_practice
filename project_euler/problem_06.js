/*
The sum of the squares of the first ten natural numbers is,

1^2+2^2+...+10^2=385

The square of the sum of the first ten natural numbers is,

(1+2+...+10)^2=55^2=3025

Hence the difference between the sum of the squares of the first
ten natural numbers and the square of the sum is

3025-385=2640

Find the difference between the sum of the squares of the first
one hundred natural numbers and the square of the sum.
*/


// find the sum of squares
function sumSquares(n){
    let answer = 0
    for (i = 0; i <= n; i += 1) {
        answer = i*i+answer
    }
    return answer
}

// find the square of sum
function squareSum(n){
    let sum = 0
    for (i = 0; i <= n; i += 1) {
        sum = sum + i
    }
    return sum * sum
}

// Find the difference between sum of squares and square of sum
function sumDifference(n){
    let a = sumSquares(n)
    let b = squareSum(n)
    return b - a
}

console.log(sumDifference(100))