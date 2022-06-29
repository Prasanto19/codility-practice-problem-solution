// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayLength = A.length;
    let arraySum = 0;
    A.sort();
    for(let i = 0; i < arrayLength; i++) {
        if(A[i]===A[i+1])
            break;
        arraySum += A[i];
    }
    let expectedArraySum = ((arrayLength ) * (arrayLength +1)) /2;
    if(arraySum===expectedArraySum)
    	return 1;
  	else
    	return 0;
}
