const name = ['shohaib','sujon','miraj','mehidi'];

function myName(value,index,array){
    
   return total+value;
   //return value.toUpperCase();
   //return value.index;

}

// ---method----

const newName = name.reduce(myName);
console.log(newName);

const numbers = [49,32,3,21,33,5];

//  function myFunction(total,value,index,array){
    
//    //console.log(total);
//    //console.log(value);
//     //return total+value;
   
//  }

 const newNumbers = numbers.reduce(myFunction);
 console.log(newNumbers);

 const d  = new Date();
 console.log(d);