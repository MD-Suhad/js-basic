const person = {fname:"John", lname:"Doe", age:25};

 for(let x in person){


   console.log(person[x]);
 }
 
const numbers = [45, 4, 9, 16, 25];
for(let y in numbers){
   console.log([y]);
}
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// while (cars[i]) {
//   text += cars[i];
//   i++;
// }
// console.log(cars);

let i =0;
let text = "";
while (i < 10) {
   text += "The number is  " + i;
   i++;
 }
 console.log(text);