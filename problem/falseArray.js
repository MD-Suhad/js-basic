const obj = {
   a:'lws',
   b:undefined,
   c:'learn with suhad',
   d:false,
   e:'loving',
   f:NaN
};

const trueObject = function(obj){
   for(let i in obj){
      if(!obj[i]){
          delete obj[i];
      }
   }
   return obj;
};
console.log(trueObject(obj));