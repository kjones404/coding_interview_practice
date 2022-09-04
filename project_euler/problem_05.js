/*
2520 is the smallest number that can be divided by each of the
numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible
by all of the numbers from 1 to 20?
*/

// iterate 1 through n to check if answer is divisible by each
function checkAnswer(answer, n){
    for (var j = 1; j <= n; j += 1){
        if (answer % j !== 0){
            return false;
        }
    }
    return true;
  }

function smallestEvenlyDivisible(n){
    let answer = n
    // loop through every multiple of n, if true end loop
    while (!checkAnswer(answer, n)){
        answer += n;
    }
    return answer;
  }

  console.log(smallestEvenlyDivisible(20))