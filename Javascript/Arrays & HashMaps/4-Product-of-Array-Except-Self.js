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


// Time Complexity O(N)
// Space Complexity o(N)


