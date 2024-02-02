//Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
//javascript class not e object

// Declaration
//class Bike{
//    constructor(name,model) {

//       this.name = name;
//       this.model = model;

//    }

//    age(version){
//        return version;
//    }
// }

// let myBike = new Bike("R15","v3");
// console.log(myBike,myBike.age(2023));

//Declaration
class LionsSectionRed{
  constructor(teacher,student){
    this.teacher = "Book Teach And  Maintaning";
    this.student = "Book Reading & Learning";
  }
}
//Expression means the class is anonymous but assigned to a variable 
const lions = class LionsSectionRed{
  constructor(teacher, student){
    this.teacher = "Book Teach And  Maintaning";
    this.student = " Learning";
  }
};
//console.log(this.teacher, this.student);

// const obj = {
//   proto: {
//     prop:"foo",
//   },
//   notAMethod: function(){
//     console.log(obj.prop);
//   }
// }

// const objName = {

//   name:"shohaib",
//   family(){
//     return this.name;
//   },

// };
// console.log(objName.name);


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755








// class Bike{
//    constructor(name,model){
//       this.name = name;
//       this.model = model;
//    }
// }

// let class1 = new Bike("suzuki",2012);
// let Bike2023 = new Bike("r15-v4",2022);
//console.log(Bike2023);

class Car {
   constructor(name, year) {
     this.name = name;
     this.year = year;
   }
   age() {
     let date = new Date();
     return date.getFullYear() - this.year;
   }
 }
 
 let myCar = new Car("Ford", 2014);
 //console.log(myCar);
 //console.log(myCar.age());
 //document.getElementById("demo").innerHTML =
 "My car is " + myCar.age() + " years old.";
