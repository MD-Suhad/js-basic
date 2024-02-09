const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

function flatten(arr,depth) {
   if(depth == 0){
      return flattenArray(arr);
   }

   let res = [];
   for(let i = 0; i< arr.length; i++) {
      if(Array.isArray(arr[i])){
         res.push(flatten(arr[i],depth-1));
      }
      else{
         res.push(arr[i]);
      }
   }
   return res;
}
function flattenArray(arr){
   let res = [];
   for(let i = 0; i< arr.length; i++) {
     if(Array.isArray(arr[i])){
      res = res.concat(flatten(arr[i]));
     }
     else{
      res.push(arr[i]);
     }
   }
   return res;

}
console.log(flatten(arr,3));
