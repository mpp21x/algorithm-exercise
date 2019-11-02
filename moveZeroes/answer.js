/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let length = nums.length;
  let smallestNum;
  let smallestNumIndex;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    if(num == 0){
      nums.shift();
      nums.push(num);
    }


  }
};


console.log(moveZeroes([0, 1, 0, 3, 12]));
