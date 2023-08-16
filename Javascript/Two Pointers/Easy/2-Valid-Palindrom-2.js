/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
      let right = s.length-1;
      while(left<right){
          if(s.charAt(left)==s.charAt(right)){
              left++;
              right--;
          }
          if(s.charAt(left)!=s.charAt(right)){
              return checkPalindrome(s,left+1,right) || checkPalindrome(s,left,right-1);
          }
      }
      return true;
  };
  
  const checkPalindrome = (s,i,j) => {
      let left = i;
      let right = j;
      while(left<right){
          if(s.charAt(left)==s.charAt(right)){
              left++;
              right--;
          }
          if(s.charAt(left)!=s.charAt(right)){
              return false;
          }
      }
      return true;
  };