console.log("connecting the file");
// import * as combine from './combine.js';

//  console.log(combine.practice.multiple(5,3)); 
//  console.log(combine.practice. division(15,5));
//  console.log(combine.sayMyName());

const  { sayHello,sayHi } = await import ("./getting.js");

const promises = Promise.all([
   await import("./getting.js"),
   await import("./practice.js")
])

promises.then(result =>{
   console.log(result[0].sayHello());
   console.log(result[1].multiple(4,5));
})