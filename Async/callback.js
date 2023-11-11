const myNumbers = [4,3,-20,-7,5,9,-6];

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
console.log(posNumbers);


function removeNeg(numbers, callback) {
   const myArray = [];
   for(const x of numbers) {
      if(callback(x)){
         myArray.push(x);
      }
   }
   return myArray;
}

















function myDisplayer(some){
   console.log(some);
}

function myCalculator(num1,num2,callback){
   let sum = num1 + num2;
   if(callback) callback(sum);
   //anonymous function
}
myCalculator(5,5,myDisplayer);
// //myDisplayer(result);
// //console.log(myDisplayer);

setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {

   console.log(value);

//   document.getElementById("demo").innerHTML = value;
}
myFunction();

