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

/*
  SOLUTION 2
  1. Tạo ra 1 hash map để lưu key là giá trị phần tử array 1 và 
  value là số lần xuất hiện của nó trong array
  2. ta duyệt qua array 2 và check xem phần tử có trong map hay không
  - nếu không thì bỏ qua
  - nếu có thì sẽ set vào mảng result và giảm số lần xuất hiện đi 1 trong map
  3. return result
 */

const intersect = (nums1, nums2) => {
  const map = new Map();
  const result = [];
  for (const i of nums1) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  for (const j of nums2) {
    if (map.get(j)) {
      result.push(j);
      map.set(j, map.get(j) - 1);
    }
  }
  return result;
};
