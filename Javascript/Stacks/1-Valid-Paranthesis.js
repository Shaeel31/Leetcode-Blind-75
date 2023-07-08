/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  let paranthesis = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (paranthesis[c]) {
      stack.push(paranthesis[c]);
    }
    else if (stack.pop() !== c) {
      return false;
    }
  }
  return !stack.length
}
isValid("()[]{}")

// Complexity O(N)