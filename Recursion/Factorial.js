// iteratively
function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
    total *= i
  }
  return total;
}

// Write a function factorial which accepts a positive integer and returns the factoraial of that integer.
// A factorial is the product of an integer and all the integers below it.
// (e.g. factorial four (4!) is equal to 24 -> 4*3*2*1)
// factorial zero (0!) is always 1

// recursively
function factorial(num){
  // edge case - negative numbers
  if(num < 0) return 0;
  // base case
  if(num <= 1) return 1;
  // recursive case
  return num * factorial(--num);
}