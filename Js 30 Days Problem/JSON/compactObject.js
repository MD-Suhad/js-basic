// what is compact object
// n JavaScript, a “compact” object or array is one where all falsy values have been removed. Falsy values in JavaScript are false, null, 0, '', undefined, and NaN. Here’s how you can compact an object or array:
// example::
// const compact = arr => arr.filter(Boolean);
// compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
//const compact = obj => {
//    Object.fromEntries(
//       Object.entries(obj).filter(([key,value]) =>Boolean(value))
//    );
//    compact({ a: 0, b: 1, c: false, d: '', e: 2, f: 'a', g: 'e' * 23, h: NaN });
// }

// console.log(compact);


var compactObject = function(obj){
   if( typeof obj === "object"){
      if(Array.isArray(obj)) {
         let temp = [];
         for(let i = 0; i < obj.length; i++){
            if(Boolean(obj[i])) temp.push(compactObject(obj));
         }
         return temp;
      }
      else{
         let temp = {};
         for(let i in obj){
            if(Boolean(obj[i])) temp[i] = compactObject((obj[i]));
         }
         return temp
      }
   }
   return obj;
}

compactObject();


















