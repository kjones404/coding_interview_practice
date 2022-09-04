/*
Problem 1:
If we list all the natural numbers below 10 that are multiples of
3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/


function findSumMultiples(max){
    let sum = 0;
    // set i to 3, as long as i is less than max, add 1 to i
    for (i = 3; i < max; i += 1) {
        if (i % 3 === 0 || i % 5 === 0){
                sum += i;
        };
    };
    return sum;
}

console.log(findSumMultiples(1000))