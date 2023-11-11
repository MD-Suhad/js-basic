const person = {
   firstName:"John",
   lastName: "Doe",
   fullName: function () {
     return this.firstName + " " + this.lastName;
   }
 }
 
 const member = {
   firstName:"Hege",
   lastName: "Nilsen",
 }
 
 //let fullName1 = person.fullName.bind(member);
 //console.log(fullName1);

 const flat = {
   room1Name:'saju',
   roo2Name: 'badhon',
   flatName: function(){
      console.log("badhon & saju house");
      return this.firstName + " " + this.lastName ;
   } 
 }

 const flat2 = {
   room1Name:'ashik',
   room2Name:'suzon'
 }

let flatMalikName = flat.flatName.bind(flat2);
console.log(flatMalikName);