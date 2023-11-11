function fizzBuzz(number){
   for(let i = 1 ;i<=number ;i++){
      if(i%15==0){
         console.log(`${i} fizzbuzz Number`);
      }
      else if(i%5==0){
         console.log(`${i} badhon5 number`);
      }
      else if(i%3==0){
         console.log(`${i}  suhad3 number`);
      }
      else{
         console.log(i);
      }
   }
}
fizzBuzz(100);