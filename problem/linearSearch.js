function linearSearch(arr,value){

   for(let i = 0 ;i<arr.length ;i++){

          if(arr[i] === value){
            return arr[i];
          }
   }

   return "Not Found"

}

console.log(linearSearch([1,2,3,4], 2));