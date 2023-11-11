function Person(first, last, age, eyecolor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyecolor;
 }
 
 const shohaib = new Person('suhad','babu',30);
 const badhon = new Person('musfiq','rahman',24);
  
 const ashik = new String('john');

 String.prototype.doingFun = function(){
   return "i am doing fun!";
 }


  const x = "bangladesh";
  console.log(x.doingFun());





 Person.prototype.country = "bangladesh";

 //console.dir(shohaib);
 //console.log(myMother);