/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  const aLength = A.length;
  A = A + A;
  return aLength === B.length && A.indexOf(B) !== -1;
};

console.log(rotateString("abcde", "cdeab"));
