/*
Starting in the top left corner of a 2×2 grid, and only being
able to move to the right and down, there are exactly 6 routes
to the bottom right corner.

[0][0] -> [0][1] -> [0][2] -> [1][2] -> [2][2]
[0][0] -> [0][1] -> [1][1] -> [1][2] -> [2][2]
[0][0] -> [0][1] -> [1][1] -> [2][1] -> [2][2]
[0][0] -> [1][0] -> [1][1] -> [1][2] -> [2][2]
[0][0] -> [1][0] -> [1][1] -> [2][1] -> [2][2]
[0][0] -> [1][0] -> [2][0] -> [2][1] -> [2][2]

How many such routes are there through a 20×20 grid?
*/

function routes(gridSize){
    let choices = gridSize * 2

    // factorials: https://youtu.be/pxh__ugRKz8
    function factorial (n){
        if (n === 1){
            return n
        } else {
            return n * factorial(n-1)
        }
    }

    // comination formula: https://youtu.be/p8vIcmr_Pqo
    return factorial(choices) / (factorial(gridSize) * factorial(choices - gridSize))
}

console.log(routes(20))