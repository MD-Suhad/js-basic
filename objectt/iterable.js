const myNumbers = {};

myNumbers[Symbol.iterator] = function() {
   let n = 0;
   done = false;
   return {
     next() {
       n += 10;
       if (n == 100) {done = true}
       return {value:n, done:done};
     }
   };
 }

for (let num of myNumbers){
   console.log(num);
}













// const numbers = {
//    name: "sohaib",
//    age: '24',
//    country:'bangladesh'
// }
// console.dir(numbers);

// for(let i of numbers){
//    console.dir(i)
// }

// const numbs = [2,3,4,5,6];


// const numIterator = numbs[Symbol.iterator]();

// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());

// console.dir(numbs[Symbol.iterator]());









// for(let x of numbs){
//    console.dir(numbs);
// }


//    let n = 10;
//    return {
//       next: function(){
//          n = n+ 10;
//          return {value:n,done:false  } 
//       }
//    }
     

// }

// const iterable = myNumber();
// console.log(iterable.next());