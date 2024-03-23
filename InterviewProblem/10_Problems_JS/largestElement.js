let arr = [12,34,21,15,67,35,64,25];
arr.sort((a,b) => a-b);

let n = 1;

const nthLargest = arr[arr.length-n]

console.log(nthLargest);