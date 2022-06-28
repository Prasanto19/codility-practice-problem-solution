// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayLength = A.length;
    let arraySum = 0;
    for(let i = 0; i < arrayLength; i++) {
        arraySum += A[i];
    }
    let expectedArraySum = ((arrayLength + 1) * (arrayLength + 2)) /2;
    return expectedArraySum-arraySum;
}
