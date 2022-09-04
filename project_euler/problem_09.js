/*
A Pythagorean triplet is a set of three natural numbers,
a < b < c, for which,

a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which
a + b + c = 1000.

Find the product abc.
*/

// if you solve for c you get: c = 1000 - a - b
// we know that a & b can not be larger than 1000
// loop through all possible combinations of a & b being 1-1000
// solve for c
// test if a^2 + b^2 = c^2 && a + b + c = 1000
function pythagoreanProduct(n){
    for (a = 1; a <= n; a += 1) {
        for (b = 1; b <= n; b += 1) {
            c = 1000 - a - b
            if ((a ** 2 + b ** 2 === c ** 2) && (a + b + c === n)){
                return a * b * c
            }
        }
    }
}

console.log(pythagoreanProduct(1000))