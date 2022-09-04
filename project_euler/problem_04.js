/*
A palindromic number reads the same both ways. The largest
palindrome made from the product of two 2-digit numbers is
9009 = 91 × 99.

Find the largest palindrome made from the product of two
3-digit numbers.
*/

// convert number to string and check for palindrome
function isPalindrome(n) {
    n = n.toString();
    return n === n.split("").reverse().join("");
}

// return set number 9 digits
function getNumber(n){
    let number = 0
    for (i = "9"; i.length <= n; i += "9"){
        number = +i
    }
    return number
}

function largestPalindrome(digits) {
    let max = 0;
    let start= getNumber(digits);
    let finish = getNumber(digits-1);
    // start at highest number and work its way down against
    // the highest number
    for (a = start; a > finish; a--) {
        // because a * b === b * j, no need of both a and b
        // to count down from 999
        for (b = a; b > finish; b--) {
            let answer = b * a;
            if (isPalindrome(answer) && answer > max) {
                max = a * b;
            }
        }
    }
    return max;
}

console.log(largestPalindrome(3))
