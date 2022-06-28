// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort();
    let arrayLength = A.length;
    let count = 0;
    if(arrayLength===1){
        return A[0];
    }
    const newArray = [];
    for(let i = 0 ; i < arrayLength; i++) {
        if(i===0){
            count = 1;
        }
        else {
            if(A[i]===A[i-1]) {
                count++;
                if(i===(arrayLength-1)) {
                    if(count%2)
                        return A[i-1];
                }
            }
            else {
                if(count%2)
                    return A[i-1];
                count = 1;
                if(i===(arrayLength-1))
                    return A[i];
            }
        }
    }
}
