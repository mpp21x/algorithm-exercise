/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let fromIndex = 0;
  let index = nums.indexOf(0);
  while (index !== -1) {
    fromIndex++;
    nums.splice(index++, 1);
    nums.push(0);
    index = nums.indexOf(0, fromIndex);
    console.log('fromIndex:' + fromIndex);
    console.log('index:' + index);
  }
  return nums;
};


console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0,0,1]));
