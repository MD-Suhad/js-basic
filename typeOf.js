function isArray(myArray) {
   console.log(myArray.constructor.toString().indexOf("Array")>-1);

}
isArray({fname:'suhad'});