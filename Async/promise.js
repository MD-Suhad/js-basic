// let numbers  = [9,7,3,10,5];
// let  twoSum = function(numbers, target) {
//   const hash = {};
//   for (let i = 0; i < numbers.length; i++) {
//     const diff = target - numbers[i];

//     // If the difference is in the hashmap, return the indices.
//     if (diff in hash) { // or, hashmap[diff] !== undefined
//       return [hash[diff], i];
//     }

//     // Otherwise, add the current number to the hashmap.
//     hash[numbers[i]] = i;
//   }

//   return [];
// };
// const sum = twoSum(numbers,10);//[2,7,5,6]
// console.log("hashmap value:",sum);

// let myPromise = new Promise(function(myResolve, myReject) {

//    setTimeout(function() { myResolve("I love You !!"); }, 1000);
//  });

//  myPromise.then(function(value) {
//    console.log(value);
//  });

// function myDisplayer(some) {

//    console.log(some);
//  }

//  let myPromise = new Promise(function(myResolve, myReject) {
//    let x = 1;

//  // The producing code (this may take some time)

//    if (x == 0) {
//      myResolve("OK");
//    } else {
//      myReject("Error");
//    }
//  });

//  myPromise.then(
//    function(value) {myDisplayer(value);},
//    function(error) {myDisplayer(error);}
//  );

// Promise States(internal)
// --pending: when execution fulfil.
// --fulfilled: when resolves successfully.
// --rejected: when promise rejected

// fulfilled / rejected = settled;

//result

// --undefined: initial phase when state is pending
// --value: when promise resolves successfully
// --error: when promise rejects.

// .then() --- most probably most important widely used;
// .catch() ---second most probably used...
// .finally() ---standing coding practice

// let promise = new Promise(function (resolve, reject) {
//   //this promise function is the executor function
//   let value = "water";
//   resolve(value);
// });
// let promiseError= new Promise(function(resolve,reject){
//                     setTimeout(function(){
//                       reject(new Error("jack fell down and......."));
//                     },2000)
// })

// const grandParentsCooking = () => {
//   promise.then(function (result) {
//     console.log(`cooking with ${result}`);
//   });
// };

// const grandParentsNotCooking = () => {
//   promiseError.catch(function(error){
//     console.log(`not accepted proposal ${error.message}`)
//   })
// }
//grandParentsNotCooking();
//grandParentsCooking();


