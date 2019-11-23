var moveZeroes = function (nums) {
  nums.times = nums.times === undefined ? 0 : (nums.times + 1);

  if (nums.index === undefined) {
    nums.index = 0;
  }

  if ((nums.length - 1) === nums.times) {
    return nums;
  }

  if (nums[nums.index] === 0) {
    nums.splice(nums.index, 1);
    nums.push(0);
  } else {
    nums.index++;
  }

  return moveZeroes(nums);
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
nums = [0, 0, 1];
moveZeroes(nums)
console.log(nums);
