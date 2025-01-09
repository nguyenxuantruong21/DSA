/*
  SOLUTION 1: 
  Description:
    - Yêu cầu là tạo ra 1 stack với các tác vụ như push, pop, top, empty
  Implement: 
    - Tạo ra 1 queue  
    - push: 
      + mỗi lần thêm dữ liệu thì thêm vào queue thí q.push(x)
      + lặp qua các phần từ của q và thêm phần tử đầu tiên xuống cuối
        với mục đích là reverst lại q
 */

class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    return this.q.shift();
  }

  top() {
    return this.q[0];
  }

  empty() {
    return this.q.length === 0;
  }
}
