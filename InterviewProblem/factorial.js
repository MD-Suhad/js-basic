//Write a JavaScript program to calculate the factorial of a given number. 

 function factorialNumber(number){
   if(number === 0 || number === 1){
      return 1;
   }
   else {
      return number * factorialNumber(number -1);
   }
 }

 const factorial = factorialNumber(24);
 console.log(factorial);