
//let counter = 0;


function temporary() {
   let counter = 0;
    
   return function(){

      counter += 1;
   }
   plus();
  //return counter;
}
 

      const add = temporary();

add();
console.dir(add);
// add();
// add();
