function outer() {
   let x = 10;
 
   function inner() {
     let y = 20;
     console.log(x + y); // inner function can access the 'x' variable from the outer function
   }
 
   return inner;
 }
 
 const innerFunction = outer(); // outer() creates a lexical environment, and innerFunction now holds a reference to that environment
 
 innerFunction(); // When innerFunction is invoked, it still has access to the 'x' variable from the outer lexical environment
 