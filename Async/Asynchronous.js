var runningSum = function(nums) {
   let ans = new Array(nums.length)
   ans[0] = nums[0];
   for(let i =1;i<nums.length;i++){
    ans[i] = ans[i-1] + nums[i];
    
   }
   return ans;
};
console.log(runningSum([1,2,3,4]));

























// let reverse = 0;

// var isPalindrome = function(palindrome) {
//        let num = 0,key = palindrome
//     for(let i = 1;palindrome !=0;i++){
//       num = palindrome%10;
//       palindrome = palindrome/10;
//       reverse = num+(reverse*10);


//     }
//     if(reverse == key){
//       console.log(" is a palindrome number");
//     }
//     else{
//       console.log(" is not a palindrome number");
//     }
   
    
// };
// //isPalindrome(121);
// console.log(isPalindrome(99));
