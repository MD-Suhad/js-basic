// function hi(){
//    return function hello(){
//       console.log("how are you");
//    };
// }

// // const conversion = hi()();
// // console.log(conversion);

// function suhad(){
//    return console.log("good boy");
//    babu();
// }

// const name = suhad(function babu(){
//      return console.log("suhad babu is a good boy");
// })
 
// console.log(name);

// // const numbers = [1, 2, 3, 4, 5];
// // const numbers1 = [1, 2, 3, 4, 5];

// // // Example of map(): Applying a function to each element
// // const doubledNumbers = numbers.map((num) => num * 2);
// // console.log(doubledNumbers);

// // // Example of map(): Applying a function to each element

// // const doubledNumbers1 = numbers.filter((num) => num *2 );
// // console.log(doubledNumbers1);

// // // Example of reduce(): Applying a function to each element
// // const doubledNumbers2 = numbers.reduce((num) => num * 2);
// // console.log(doubledNumbers2);


// // function createMultiplier(factor) {
// //    return function (number) {
// //      return number * factor;
// //    };
// //  }
 
// //  const double = createMultiplier(2);
// //  const triple = createMultiplier(3);
 
// //  console.log(double(9)); // 10
// //  console.log(triple(5)); // 15
 

// // let alert;
// // for(var i = 0; i<3; i++){
// //    setTimeout(function() {alert(i);},1000+i);
// // }

// // (function (){
// //    var a = b = 6;
// // })();
// // console.log(b);
// function StringChallenge(num, challengeToken) {
//    // Calculate the number of hours (integer division by 60)
//    const hours = Math.floor(num / 60);
 
//    // Calculate the number of minutes (remainder after division by 60)
//    const minutes = num % 60;
 
//    // Format the result as "hours:minutes"
//    const result = hours + ":" + minutes;
 
//    // Replace characters in the challenge token with '--[CHAR]--'
//    const replacedResult = replaceCharacters(result, challengeToken);
 
//    return replacedResult;
//  }
 
//  function replaceCharacters(inputString, charactersToReplace) {
//    const charArray = charactersToReplace.split('');
//    const regex = new RegExp(`[${charArray.join('')}]`, 'g');
//    return inputString.replace(regex, '--[CHAR]--');
//  }
 
//  // Example usage:
//  const num = 126;
//  const challengeToken = "--[CHAR]--";
//  const output = StringChallenge(num, challengeToken);
//  console.log(output);  // Output: "1:3"
 

const redius = [1,2,4];
const calculateArea = function(radius) {
   const output = [];
   for(let i = 0; i < redius.length; i++){
      output.push(Math.PI * radius[i] * radius[i]);
   }
   return output;
}

console.log(calculateArea);