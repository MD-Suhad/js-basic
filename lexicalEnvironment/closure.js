//In JavaScript, a closure is created when a function is defined inside another function (the outer function) and has access to variables from the outer function, even after the outer function has finished executing. The inner function "closes over" the variables of the outer function, hence the term "closure." Closures allow you to create private variables, maintain state, and create more modular and flexible code.


//জাভাস্ক্রিপ্টে, একটি ক্লোজার তৈরি হয় যখন একটি ফাংশন অন্য ফাংশনের (বাইরের ফাংশন) ভিতরে সংজ্ঞায়িত করা হয় এবং বাইরের ফাংশন থেকে ভেরিয়েবলগুলিতে অ্যাক্সেস থাকে, এমনকি বাইরের ফাংশনটি কার্যকর করা শেষ হওয়ার পরেও। অভ্যন্তরীণ ফাংশনটি বাইরের ফাংশনের ভেরিয়েবলকে "বন্ধ করে", তাই "ক্লোজার" শব্দটি।
// " ক্লোজারগুলি আপনাকে ব্যক্তিগত ভেরিয়েবল তৈরি করতে, অবস্থা বজায় রাখতে এবং আরও মডুলার এবং নমনীয় কোড তৈরি করতে দেয়৷


function walk(){
   var dist = "1899 feet";
   function fly(){
      console.log(`At `+dist);
   }
   return fly;
}

let flyFunc = walk();
flyFunc();

function outerFunction(){
   let shohaibCode = "my Name is shohaib";
   function innerFunction(){
      let shohaibEmail = "shohaib@gmail.com";
      console.log(`${shohaibEmail} pass: ${shohaibCode}`);
   }
   return innerFunction;
}

let closureExample = outerFunction();
// Calling the inner function (closure)
closureExample();