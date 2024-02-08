//Flatten Array: Flattening an array means taking an array that may contain nested arrays (i.e., arrays within arrays) and converting it into a single, one-dimensional array. In other words, it involves removing all the nested arrays and combining their elements into a single array.


function FlattenArray(arr){
   let flatArray = [];
   for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
         flatArray = flatArray.concat(FlattenArray(arr[i]));
      }
      else{
         flatArray.push(arr[i]);
      }
   }
   return flatArray;
}

var arr = [1, 2, 3, 4, [5, 6, [7, 8]], [9]]
console.log(FlattenArray(arr));