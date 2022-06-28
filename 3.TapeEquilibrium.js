// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayLength = A.length;
    let rightSum = 0;
    let minimalDifference = Number.MAX_VALUE;
    for(let i = 0; i < arrayLength; i++) {
        rightSum += A[i];
    }
    let leftSum = 0;
    for(i = 0; i < arrayLength-1; i++) {
        rightSum -= A[i];
        leftSum += A[i];
        if(minimalDifference > Math.abs(rightSum-leftSum))
            minimalDifference = Math.abs(rightSum-leftSum);   
    }
    return minimalDifference; 
}
