/**
 * @param {string} s
 * @return {number}
 */

/**
 SOLUTION: hash map
 - 1: chuyển string qua array
 - 2: tạo ra 1 map, lặp qua từng phần tử rồi set vào map
      với mỗi phần tử trùng nhau thì tăng giá trị tại phần tử lên 1
 - 3: lặp qua từng phần từ của string s nếu value của map 
      tại vị trí s[i] === 1 thì return i
 */

var firstUniqChar = function (s) {
  const stringArr = Array.from(s);
  const map = new Map();
  for (const c of stringArr) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
