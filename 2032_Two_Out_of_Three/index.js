/**
 * SOLUTION 1:
 * 1. Tạo ra 3 set dành cho 3 array
 * 2. tạo ra 1 mảng chứa kết quả result = []
 * 3. dùng vòng for để lặp qua tường set và check nếu tồn tại trong 2 set còn lại thì push vào result
 */

var twoOutOfThree = function (nums1, nums2, nums3) {
  const output = [];
  const setmap1 = new Set([...nums1]);
  const setmap2 = new Set();
  const setmap3 = new Set();
  /*
    1. 
      + lặp qua các phần tử của num2, check nếu như nó đã tồn tại trong setmap1
        và chưa tồn tại trong setmap2 thì nó sẽ được thêm vào output
      + thêm vào setmap2 đế so sánh tiếp
   */
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (setmap1.has(num) && !setmap2.has(num)) {
      output.push(num);
    }
    setmap2.add(num);
  }
  /*
    2. 
      + lặp qua các phần tử của num3, check nếu như nó đã tồn tại trong setmap1
        không tồn tại trong setmap2 và setmap3 thì nó sẽ được thêm vào output
      + check nếu như nó đã tồn tại trong setmap2 và không tồn tại trong setmap1 và setmap3 
      thì nó sẽ được thêm vào output 
      + thêm vào setmap3 đế so sánh tiếp
   */
  for (let i = 0; i < nums3.length; i++) {
    const num = nums3[i];
    if (setmap1.has(num) && !setmap2.has(num) && !setmap3.has(num)) {
      output.push(num);
    }
    if (setmap2.has(num) && !setmap1.has(num) && !setmap3.has(num)) {
      output.push(num);
    }
    setmap3.add(num);
  }

  return output;
};
