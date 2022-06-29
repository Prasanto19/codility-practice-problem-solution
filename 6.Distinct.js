// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort();
    let arrayLength = A.length;
    let distinctNumbers = 0;
    for(let i = 0 ; i < arrayLength ; i++) {
    	if(A[i]===A[i+1])
      	continue;
      else
      	distinctNumbers++;
    }
    return distinctNumbers;
}