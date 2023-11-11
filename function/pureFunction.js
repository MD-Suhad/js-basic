//pure function type...
//predictable---> same output ot same input...
//example:____
// const add = (x, y) => x + y;

// add(2, 4); // 6


//readable----> mutating the inputs
//Reusable ---> reuse the functionality multiple places...
//Testable ---> pure function,Impure function(returns nothing), side effect

//------> Mutating the input...&& Dom Manipulation

//Impure function example::

// let x = 2;

// const add = y => {
//   x += y;
// };

// add(4);
// console.log(x);

// const impureDouble = (x) =>{
//    console.log("Doubling",x);
//    return x * 2;
// };

// const result = impureDouble(4);
// console.log({ result });

//“Impurely” Changing an Object

//pure function
function add(a,b){
   return a+b;
}
//Non-pure function example
let total = 0;
function addToTotal(number){
   total = total + number;
   return total;
}







const impureAssoc = (key,value,object) =>{
   object[key] = value;
};
const person = {
   name: 'suhad'
};

const result = impureAssoc('shoeSize',400,person);
console.log({
   person,
   result
});

//Purifying It Up

const pureAssoc = (key,value,object) => ({
   ...object,
   [key]: value
});

const person1 = {
   name: "shohaib"
};

const results = pureAssoc("ManSize",7.5,person1);
// console.log({
//    person1,
//    results
// });

//Another Pure Way

const pureAssoc1 = (key,value,object) => {
   const newObject = {...object};
   newObject[key] = value;
   return newObject;
};

const person2 = {
   name: "shohaib suhad1"
};

const result1 = pureAssoc1("loving frieds", 30, person2);

//console.log({person2, result1});


const pureAssoc2 = (key,value,object) =>{
     let new2Object = {...object};
     new2Object[key] = value;
     return new2Object;
}
const person4 = {
   name: "suhad babu",
   email:"shohaibsuhad18@gmail.com",
   phone: "01767028815"
};

const result3 = pureAssoc2("same Input",40,person4);
console.log(result3);


