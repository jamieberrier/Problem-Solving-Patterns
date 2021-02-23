// Wrte a function called productOfArray which takes in an array of numbers
// and returns the product of them all

// Examples:
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(nums) {
  // base case
  if(nums.length === 1) return nums[0]
  return nums[0] * productOfArray(nums.slice(1))
}