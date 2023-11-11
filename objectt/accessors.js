// const person = {
//    firstName: 'John',
//    lastName: 'doe',
//    language: '',
//    fullName: function(){
//       return this.firstName + " " + this.lastName;
//    },
//    set lang(lang){
//       return this.language = lang.toUpperCase();
//    }
// };
// person.lang = "hospital";

// console.log(person);
// console.log(person.fullName());

//document.getElementById('demo').innerHTML = person.language;


const obj =  {counter:0};

//Define setters and getters

const person = {
   firstName:'john',
   lastName:'doe'
}

Object.defineProperty(person,"fullName",{
   get:function(){
         return this.firstName + "  " + this.lastName;
}
})

console.log(person.fullName);

