function secondSmallest (arr){
   const sortedArr = arr.sort((a,b) => a-b);
   return sortedArr[1];
}