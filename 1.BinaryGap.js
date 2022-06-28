// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let nText = N.toString(2);//Converted to Binary in String type from number
	let nLen = nText.length;
    let count = 0;
    let countStart = false;
    const binaryGapArray = [];
    for(let i = 0 ; i < nLen ;i++) {
        if(nText[i]==="0"&&!countStart) {
            count = 0;
        count++;
        countStart=true;
        }
        else if(nText[i]==="0"&&countStart) {
            count++;
        }
        else if(nText[i]==="1"&&countStart) {
            binaryGapArray.push(count);
            countStart=false;
        }
        
    }
    let binaryGapArrayLength = binaryGapArray.length;
    
    if(binaryGapArrayLength) {
        let maxBinaryGap = 0;
        for(i = 0; i < binaryGapArrayLength;i++) {
        if(maxBinaryGap < binaryGapArray[i])
            maxBinaryGap = binaryGapArray[i];
        }
        return maxBinaryGap;// returns maximum binary gap
    }
    else
    return binaryGapArrayLength;//If there is no Binary gap
}