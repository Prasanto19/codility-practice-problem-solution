// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayLength = A.length;
    if(arrayLength<2)
        return A;
    if(K>arrayLength){
        K = K%arrayLength;
    }
    if(K===0||K===arrayLength)
        return A;
    const newArray = [];
    for(let i =  0 ; i < K ; i++ )
        newArray.unshift(A.pop());
    arrayLength = A.length;
    for(let i =  0; i < arrayLength ; i++ )
        newArray.push(A[i]);
    return newArray;
}
