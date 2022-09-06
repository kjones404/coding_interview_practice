/*
The sequence of triangle numbers is generated by adding the natural
numbers. So the 7th triangle number would be

1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.

The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

     1: 1
     3: 1,3
     6: 1,2,3,6
    10: 1,2,5,10
    15: 1,3,5,15
    21: 1,3,7,21
    28: 1,2,4,7,14,28

We can see that 28 is the first triangle number to have over five
divisors.

What is the value of the first triangle number to have over five
hundred divisors?
*/

function totalDivisors(n){
    let stop = false;
    let number = 0;
    let next = 1;  

    // loop until set number of dividers are found
    while (!stop) {

        number += next
        next ++
        
        // reset count for each loop
        let count = 0;
        let sqrt = Math.sqrt(number);

        // check all numbers up to square root of test number
        // add 2 for each divisor found
        for (i = 1; i <= sqrt; i++){
            if (number % i === 0) {
                count += 2;
            }
            
        }

        // add one for the square root of test number
        if (number % sqrt === 0) {
            count += 1;
        }

        // if n count of divisiors found return test number
        if (count >= n){
            stop = true;
            return number
        }        
    }
}

console.log(totalDivisors(500))
