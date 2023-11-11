// A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. In other words, it treats functions as first-class citizens, allowing you to compose and manipulate functions in a powerful way. Higher-order functions are a fundamental concept in functional programming.

const data = [18,23,27,32,35];
function incrArr(arr,n){
   let result = [];

   for(const elem of arr){
      result.push(elem+n);
   }
   return result;
}

//const result =incrArr(data,9);
//console.log(result);

function decrArr(arr,n){
   let result = [];

   for(const sum of arr){
      result.push(sum-n);
   }
   return result;
}
// const result = decrArr(data,3);
// console.log(result);



function incr(num,pad){
   return num+pad;
};
function decr(num,pad){
   return num-pad;
};
function mul(num,pad){
   return num*pad;
};
function div(num,pad){
   return num/pad;
};




function smartOperation(data,op,pad){
      let result = [];
      for(const elem of data){
         result.push(op(elem,pad));
      }

      return result;
}

const res =  smartOperation(data,decr,5);
console.log(res);

// const dataCall = res.filter(function(elem,idex){
//    return elem>20;
// });
// console.log(dataCall);

// function loveSms(sms,num){
//    return sms  + num ;
// }

// function brackupSms(sms,num){
//         return sms - " "  - num ;
// }


// function joinSms(data, join, pad){
//    let result = [];
//    for(const name of data){
//       result.push(join(name,pad));
//    }
//    return result;
// }

// const res1 = joinSms('loveYou',loveSms,10);
// console.log(res1);



