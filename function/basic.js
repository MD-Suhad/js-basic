// const x = function(a,b){
//    return a*b;
// }

// let z = x(4,5);
// console.log(z);

const add = new Function("a","b","return a*b");

let x = add(6,6);
console.log(x);

const classRoom = new Function("c","d","return c+d");
console.dir(classRoom);