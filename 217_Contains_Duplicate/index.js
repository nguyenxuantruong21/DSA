/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  SOLUTION 1:
  1. tạo ra 1 map để lưu giá trị của nums
  2. lặp qua từng phần tử 
    - nếu chưa tồn tại trong map thì thêm vào 
    - nếu tồn tại rồi thì set giá trị value = value + 1
  3. nếu value >= 2 thì return true không thì return false
 */

var containsDuplicate = function (nums) {
  const map = new Map();
  for (const i of nums) {
    map.set(i, (map.get(i) || 0) + 1);
    if (map.get(i) >= 2) {
      return true;
    }
  }
  return false;
};
