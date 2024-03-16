// using reduce method of array

let arr = ['hello','world','java','hello','java','shohaib','suhad','suhad'];
// function countWord(p) {
//    let result = p.reduce((allNames,name) =>{
//       if(name in allNames){
//          allNames[name]++;
//       }
//       else{
//          allNames[name] = 1;
//       }
//       return allNames;
//    },{});
//    return result;
// }

function countWord(p){
   let count = {};
   p.forEach((item) =>{
      if(count[item]){
         count[item]++; 

      }
      else{
         count[item] = 1;
      }
   })
   return count;
}




console.log(countWord(arr));