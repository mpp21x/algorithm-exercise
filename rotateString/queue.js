/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  A = Array.from(A);
  const length = A.length;
  for (let i = 0; i <= length; i++) {
    A.unshift(A.pop())
    console.log(A);
    if(A.join('') == B){
      return true;
    }
  }
  return false
};

// console.log(rotateString("abcde","cdeab"));
