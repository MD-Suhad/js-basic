function fetchWater(count){
   if(count === 0){
      console.log("no more water in the fetch");
      return;
   }
      
   console.log("Fetching Water.........");
   fetchWater(count-1);
}

fetchWater(6);