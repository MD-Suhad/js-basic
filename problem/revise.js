function outer() {
   let outerVar = 'I am from the outer function';
 
   function inner() {
     //console.log(outerVar); // This inner function has access to the outerVar variable
   }
 
   return inner;
 }
 
 const innerFunction = outer(); // innerFunction is now a closure

 
 innerFunction();
 // This will log "I am from the outer function"
 
 let fruit = "mango";
 let vegetable  = "poteto";
 fruit = vegetable;
 console.log(fruit);
 console.log(vegetable);