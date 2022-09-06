/*
The following iterative sequence is defined for the set of
positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the
following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing
at 1) contains 10 terms. Although it has not been proved yet
(Collatz Problem), it is thought that all starting numbers finish
at 1.

Which starting number, under one million, produces the longest
chain?

NOTE: Once the chain starts the terms are allowed to go above one
million.
*/


function longestChain(stop){
    let sequence = 1
    let answer = 1
    let number = 1
    let chain = 1

    function collatz(n){
        switch(n != 1) {
            case n % 2 === 0:
                return n/2
            default:
                return (n*3)+1
        } 
    }

    // loop through each number up to stop number
    for (i = 2; i < stop; i++){
        number = i
        chain = 0
        // run current number through collatz until return 1
        while (number != 1) {
            number = collatz(number);
            chain ++
        }
        if (chain > sequence){
            sequence = chain;
            answer = i
        }
    }

    return answer
}

console.log(longestChain(1000000))