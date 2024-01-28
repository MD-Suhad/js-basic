// const resultDetails = '{"result":true, "count":29}';
// const object = JSON.parse(resultDetails);
// const object2 = JSON.stringify(resultDetails);
// console.log(object.result);
// console.log("object --", object2.count);
//leetcode problem

// let arr = [1,2,3,4,5];
// let size = 1;
var chunk = function(arr,size){
   let chunkArray = [];
   let index = 0;
   while(index < arr.length){
       chunkArray.push(arr.slice(index,index+size));
       index = index + size;
   }
   return chunkArray;
   
}

const result = chunk([1,2,3,4,5],1);
console.log(result);