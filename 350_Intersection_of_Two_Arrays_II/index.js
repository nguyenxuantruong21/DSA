/**
 * SOLUTION 1:
  1. sort 2 mảng cho trước theo thứ tự từ lớn đến bé 
  2. dùng phương pháp 2 con trỏ i cho nums1 và j cho nums2 để so sánh
  3. nếu mà num1[i] < num2[j] thì tăng i lên 1 và ngược lại
    nếu mà bằng nhau thì thêm num1[i] vào trong mảng kết quả và tăng cả i và j
 */

var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  const result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
};
