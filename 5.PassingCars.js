// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let countOne = 0;
    let arrayLength = A.length;
    for(let i = 0 ; i < arrayLength ; i++)
        if(A[i]===1)
            countOne++;
    let result = 0 ;
    for(let i = 0 ; i < arrayLength ; i++) {
        if(A[i]===1)
            countOne--;
        else
            result += countOne;
      	if(result>1000000000)
        	return -1;
    }
    return result; 
}