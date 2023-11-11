const employee  = {
   id: 9,
   name:"james",
   dept:{
      id:"d001",
      name:"spy",
      address:{
         street:"road 2 shekertech",
         city:"mohammadpur"
      }
   }
}

//console.log(employee.dept.address);

//console.log(Object.isExtensible(employee));

const { dept: {address: {city}}} = employee;
console.log(city);

const age = employee.age ? employee.age:27;
console.log(age);  