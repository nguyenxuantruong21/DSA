/**
  SOLUTION 1: 
  - 1. tạo ra 1 mảng chứa kết quả trả về
  - 2. lặp qua mảng 1 và kiểm tra xem mảng 2 có chứa phần tử nào mảng
  1 hay không, 
  - nếu không thì bỏ qua
  - nếu có => (
    kiểm tra xem mảng result đã tồn tại phần tử hay không
      + nếu có thì không đẩy vào mảng
      + nếu không thì thêm vào  
  )
 */
var intersection = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    const el = nums1[i];
    if (nums2.includes(el) && !result.includes(el)) {
      result.push(el);
    }
  }
  return result;
};

/**
  SOLUTION 2: Dùng SET 
  - 1. dùng set1 và set2 để lưu những giá trị khác biệt của 2 mảng
  - 2. tạo 1 set mới resultSet để lưu giá trị trùng nhau giữa set1 và set2
  - 3. chuyển thành array
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  const resultSet = new Set([...set1].filter((x) => set2.has(x)));
  const result = Array.from(resultSet);
  return result;
};
