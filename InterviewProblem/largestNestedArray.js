function findLargestElement(nestedArray){
   let largest = nestedArray[0][0];
   for(let arr of nestedArray){
      for(let num of arr){
         if(num > largest){
            largest = num
         }
      }
   }
   return largest;
}

const LargestElement = findFunctionElement([
   {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
   {name:"BMW", models:["320", "X3", "X5"]},
   {name:"Fiat", models:["500", "Panda"]}
 ])
console.log(LargestElement);