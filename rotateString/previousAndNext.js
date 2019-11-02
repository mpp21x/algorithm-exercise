
var rotateString = function(A, B) {
  if (A === B) return true;
  if (A.length != B.length) return false;
  for (var i = 1; i < A.length; i++) {
    var pre = A.substring(0, i);
    var next = A.substring(i);
    if (B.indexOf(pre) === A.length - i && B.indexOf(next) === 0) return true;
  }
  return false;
};


console.log(rotateString("abcde", "cdeab"));
