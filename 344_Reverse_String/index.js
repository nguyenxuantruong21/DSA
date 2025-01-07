/*
  SOLUTION: 1
  1. dùng phương pháp 2 con trỏ 1 cái đầu mảng, 1 cái cuối mảng
  2. khi mà left < right thì ta sẽ đổi chỗ cho 2 ký tự tại vị trí này
    sau mỗi lần đổi chỗ sẽ tăng left lên 1 đơn vị, và giảm right 1 đơn vị
*/

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
