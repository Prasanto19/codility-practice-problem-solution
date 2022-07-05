// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayLength = S.length;
    if(arrayLength === 0)
      return 1;
    if(arrayLength%2 === 1)
      return 0;
    const newArray = [];
    newArray.push(S[0]);
    let tempValue = "";
    let mirrorValue = "";
    for(let i = 1 ; i < arrayLength ; i++) {
    	tempValue = newArray.pop();
        mirrorValue = "";
        if(S[i]===")"||S[i]==="}"||S[i]==="]") {
            if(tempValue === "(")
                mirrorValue = ")";
            else if(tempValue === "{")
                mirrorValue = "}";
            else if(tempValue === "[")
                mirrorValue = "]";
        }
    	if(mirrorValue!==S[i]) {
            newArray.push(tempValue);
            newArray.push(S[i]);
        }
    }
    let newArrayLength = newArray.length;
    if(newArrayLength === 0 || newArray == "")
    	return 1;
  	else 
  		return 0;
}
