let sortBy = function(arr,fn){
   
    return arr.sort((a,b) => fn(a) - fn(b));
}
let fn = (x) => x;
let arr = [5,4,1,2,3];
sortBy();
console.log(sortBy);