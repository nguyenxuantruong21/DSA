/**
 *
 * @param {*} nums
 * @returns
 */

var runningSum = function (nums) {
  let arr = [];
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum = sum += nums[index];
    arr.push(sum);
  }
  return arr;
};
