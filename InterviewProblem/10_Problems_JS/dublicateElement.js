function removeDuplicates(ar){
   let results = ar.filter((item,index) =>{
      return ar.indexOf(item) !== index;
   });
   return result;
}