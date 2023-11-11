//for loop
//spread
//concat
//push
//reduce

// {
//    const marge = (first,second) =>{
//       for(let i = 0; i<second.length; i++){
//          first.push(second[i]);
//       }
//       return first;
//    }

//    const marged = marge([1,2,3],[4,5,7]);
//    console.log(marged);


// }


// //spread operator

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
//  let marged = [...arr1,...arr2];
//  console.log(marged);

//  let marged = arr1.concat(arr2);
//  console.log(marged);
//  console.log(arr1);



function reverseString(str) {
   // Split the string into an array of characters, reverse the array, and join it back into a string
   return str.split("").reverse().join("");
 }
 
 // Example usage:
 const originalString = "Hello, World!";
 const reversedString = reverseString(originalString);
 console.log(reversedString); // Output: "!dlroW ,olleH"
 