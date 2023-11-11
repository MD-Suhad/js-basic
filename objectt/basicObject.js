const user = {
  "name":"suhad",
  "address":"dhaka Bangladesh",
  "age": 23,
  "isAdmin":false,

}

// const objectFrozen = Object.freeze(user);
// delete user["name"];
// user["email"] = "suhad@gmail.com";
// user["age"] = "30";
// console.log(objectFrozen);

const config = {
  "db": "postgresql",
  "host": "acme-ind.com",
  "password": 1243,
  "admin": {
    "name": "suhad",
    "right": ['create','update','delete',] 
  }
}

Object.freeze(config);
config["db"] = "oracle";
config.admin.name = "tamanna";

console.log(config);
 
const arr = [1,2,3,4];
Object.freeze(arr);
arr.push(5);
arr.pop();
arr.length = 0;
console.log(arr);      
