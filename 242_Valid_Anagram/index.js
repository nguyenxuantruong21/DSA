/*
  SOLUTION 1:
  1. tạo ra 1 cái map cho string s 
  (key là giá trị ký tự của s, value là số lần xuất hiện)
  2. lặp qua string t check 
  - nếu không tồn tại ký tự của t trong map hoặc là có giá trị mà nó == 0 thì return false
  - còn nếu tồn tại và giá trị khác 0, thì ta giảm đi 1
*/

var isAnagram = function (s, t) {
  const map = new Map();

  if (s.length !== t.length) return false;

  for (const i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  for (const i of t) {
    if (!map.has(i) || map.get(i) === 0) {
      return false;
    }
    map.set(i, map.get(i) - 1);
  }

  return true;
};
