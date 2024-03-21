let ar = [1,2,3,4,5,6,7,8,9,10];
function missing(a){
   let l = a.length;
   let sum = 1;
   for(let i = 2; i <= (l+1); i++){
      sum += i;
      sum = sum -a[i-2];
   }
   return sum;
}

console.log(missing(ar));