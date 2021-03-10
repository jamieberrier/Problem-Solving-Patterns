/*

int binarySearch(int[] nums, int target) {
  if (nums == null || nums.length == 0)
    return -1;

  int left = 0, right = nums.length - 1;

  while (left + 1 < right){
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  // Post-processing:
  // End Condition: left + 1 == right
  if(nums[left] == target) return left;
  if(nums[right] == target) return right;
  return -1;
}

*/

function binarySearch(nums, target){
  if(nums === null || nums.length === 0) return -1

  let left = 0
  let right = nums.length - 1

  while(left + 1 < right) {
    let mid = Math.floor((left + right) / 2)

    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] < target) {
      // search right
      left = mid
    } else {
      // search left
      right = mid
    }
  }

  // Post-processing:
  // End Condition: left + 1 === right
  if(nums[left] === target) return left
  if(nums[right] === target) return right
  return -1
}