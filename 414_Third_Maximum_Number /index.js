/* Third Maximum number - Leetcode 414 */

/*
  SOLUTION: 1
  1. sắp xếp theo thứ tự từ bé đến lớn hoặc ngược lại => O(nlogn)
  2. duyệt qua các phần tử và so sánh lấy ra các số lớn 1, lớn 2,
  lớn 3 => O(n)
  => O(nlogn)
*/

/*
  SOLUTION: 2
  1. duyệt qua các phần tử và so sánh lấy ra các số lớn nhất => O(n)
  2. tiếp tục lặp lại bước 1 lấy ra số thứ 2 => O(n)
  3. tiếp tục lặp lại bước 1 lấy ra số thứ 3 => O(n)
  => O(3n) => O(n)
*/

/*
  SOLUTION: 3
  1. duyệt qua các phần tử và so sánh lấy ra các số lớn nhất => O(n)
  2. tiếp tục lặp lại bước 1 lấy ra số thứ 2 => O(n)
  3. tiếp tục lặp lại bước 1 lấy ra số thứ 3 => O(n)
  => O(3n) => O(n)
*/

var thirdMax = function (nums) {
  let third = null;
  let second = null;
  let first = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === third || nums[i] === second || nums[i] === first) continue;
    if (first === null || nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (second === null || nums[i] > second) {
      third = second;
      second = nums[i];
    } else if (third === null || nums[i] > third) {
      third = nums[i];
    }
  }
  return third === null ? first : third;
};
