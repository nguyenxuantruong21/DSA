/** 
 * Tìm dãy con có tổng lớn nhất:
 * Ví dụ: Nếu dãy đã cho là -2, 11, -4, 13, -5, 2 thì cần đưa ra
  câu trả lời là 20 (là trọng lượng của dãy con 11, -4, 13)
*/

const resolve = (nums) => {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

const nums = [-2, 11, -4, 13, -5, 2];
console.log(resolve(nums));
