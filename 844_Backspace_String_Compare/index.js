/**
  SOLUTION 1: 
  1. Tạo ra 1 hàm để sử lý chuỗi 
  - tạo 1 array bản chất là 1 stack 
  - lặp qua các phần tử nếu ký tự !== # thì thêm vào array
  - còn nếu là # thì check nếu độ dài của array > 0 thì xóa đi phần tử cuối
  2. tạo ra 2 stack trong hàm chính rồi so sánh kết quả
 */

const process = (str) => {
  let res = [];
  for (const key in str) {
    if (str[key] !== "#") {
      res.push(str[key]);
    } else if (res.length !== 0) {
      res.pop();
    }
  }
  return res.toString();
};

var backspaceCompare = function (s, t) {
  const res1 = process(s);
  const res2 = process(t);
  return res1 === res2;
};
