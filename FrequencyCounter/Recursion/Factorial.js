// iteratively
function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
    total *= i
  }
  return total;
}

// recursively
function factorial(num){
  // negative numbers
  if(num < 0) return 0;
  // base case
  if(num <= 1) return 1;
  return num * factorial(num - 1);
}