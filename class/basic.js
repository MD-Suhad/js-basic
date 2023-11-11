
//javascript class not e object

class Bike{
   constructor(name,model) {

      this.name = name;
      this.model = model;

   }

   age(version){
       return version;
   }
}

let myBike = new Bike("R15","v3");
console.log(myBike,myBike.age(2023));

















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
