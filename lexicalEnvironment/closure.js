function walk(){
   var dist = "1899 feet";
   function fly(){
      console.log(`At `+dist);
   }
   return fly;
}

let flyFunc = walk();
flyFunc();