function isPalindrome(str){
   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, ”).toLowerCase(); 
   const reversedStr = cleanStr.split(").reverse().join(");
   return clearStr === reversedStr;
}