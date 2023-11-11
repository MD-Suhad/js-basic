const sentence = "learn with Sumit is all about teaching web development skills and techiques in an efficient sumit.if you are just getting started in web development.learn with sumit has all the tools."


const matches = sentence.match(/sumits/gi);
console.log(matches);
const count = matches? matches.length : 0;
let  position = sentence.search(/sumits/i);
position  = position>=0 ? position :"not found!"
console.log(position);