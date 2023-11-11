class person {

   constructor(name,age){
      this.name = name;
      this.age = age;
   }
   play(){
      console.log(`${this.name} is playing`);
   }
}

const person1 = new person("saju", 25);
const person2 = new person("badhon",25);

person1.play();
person2.play();