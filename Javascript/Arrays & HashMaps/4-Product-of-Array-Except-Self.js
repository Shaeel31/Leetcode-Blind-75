/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
 let prefix = 1;
 let postfix = 1;
 let resultant = []   
 for(let i =0; i < nums.length ; i++){
    resultant[i] = prefix
    prefix *= nums[i]
 }
 for (let j = nums.length - 1 ; j >= 0 ; j--){
    resultant[j] *= postfix
    postfix *= nums[j]
 }
return resultant;
}

productExceptSelf([1,2,3,4])


// 2nd Soloution with O(N) time complexity

var productExceptSelf = function (nums) {
   let left_prod = []
   let right_prod = []
   let output_arr = []
   left_prod[0] = 1
   right_prod[nums.length - 1] = 1

   for (let i = 1; i < nums.length; i++) {
      left_prod[i] = nums[i - 1] * left_prod[i - 1]
   }

   for (let j = nums.length - 2; j >= 0; j--) {
      right_prod[j] = nums[j + 1] * right_prod[j + 1]
   }
   for (let k = 0; k < nums.length; k++) {
      output_arr[k] = left_prod[k] * right_prod[k]
   }
   return output_arr;
}

productExceptSelf([1, 2, 3, 4])


// Time Complexity O(N)
// Space Complexity o(N)



