var containsNearbyDuplicate = function (nums, k) {
  const indexes = new Map();
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (right - left === k + 1) {
      indexes.delete(nums[left]);
      left++;
    }
    if (indexes.has(nums[right])) {
      return true;
    }
    indexes.set(nums[right], right);
  }
  return false;
};

const nums = [1, 2, 3, 1],
  k = 3;

console.log(containsNearbyDuplicate(nums, k));
