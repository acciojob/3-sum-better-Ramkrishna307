function threeSum(arr, target) {

  arr.sort((a, b) => a - b); // sort the array in ascending order
  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      let diff = Math.abs(target - sum);

      if (diff === 0) {
        return sum; // exact match found, return the sum
      }

      if (diff < Math.abs(target - closestSum)) {
        closestSum = sum; // update the closest sum
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;


  
}

module.exports = threeSum;
