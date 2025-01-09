/*
  SOLUTION 1: 
  Description:
    - Yêu cầu là tạo ra 1 queue sử dụng 2 stack với các tác vụ như push, pop, peek, empty
  Implement: 
    - tạo ra 2 stack là stack1 và stack2, và queue là q
    - push: q.push(x) => thì thêm dữ liệu vào stack1
    - pop: q.pop() => check stack2:
                      + nếu stack 2 không có dữ liệu, stack 1 có dữ liệu
                        thì sẽ thêm dữ liệu từ stack 1 sang stack2
                      + trả ra dữ liệu là cuối của stack2 và xóa khỏi stack2
                        => return stack2.pop()
    - peek: q.peek() => check stack2:
                      + nếu stack 2 không có dữ liệu, stack 1 có dữ liệu
                        thì sẽ thêm dữ liệu từ stack 1 sang stack2
                      + trả ra dữ liệu cuối cùng của stack 2 nhưng không xóa khỏi stack2
                        => return stack2[stack2.lenght-1]
    - empty: nếu cả 2 stack1 vs stack2 đều rỗng => return true
 */

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack1.push(x);
  }

  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
