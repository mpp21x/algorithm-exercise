var moveZeroes = function (nums) {

  let zeros = [];

  function rec(nums) {
    if (nums.indexOf(0) !== -1) {
      nums.splice(nums.indexOf(0), 1);
      zeros.push(0);
      return rec()
    } else {
      return;
    }
  };
  rec(nums);

  for (let i = 0; i < zeros.length; i++) {
    nums.push(0);
  }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
// nums = [0, 0, 1];
// moveZeroes(nums)
// console.log(nums);
