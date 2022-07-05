let arrayLength = A.length;
    if(arrayLength < 3)
        return 0;
  	A.sort((a,b)=>(a-b));
    return Math.max(A[arrayLength - 1] * A[0] * A[1],A[arrayLength - 1]*A[arrayLength - 2]*A[arrayLength - 3]);