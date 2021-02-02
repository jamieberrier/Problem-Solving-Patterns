// Pattern: Frequency Counter

// Write a function called sameFrequency
// Given 2 positive integers, find out if the 2 numbers have the same frequency of digits

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false

function sameFrequency(num1, num2){
  const str1 = num1.toString()
  const str2 = num2.toString()

  if (str1.length !== str2.length) return false
  // declare empty object for each num
  let counter1 = {}
  let counter2 = {}
  // loop thru str1, adding key/values to object1
  for(let i of str1.toString()) {
    counter1[i] ? counter1[i] += 1 : counter1[i] = 1
  }
  // loop thru str2, adding key/values to object2
  for(let i of str2.toString()) {
    counter2[i] ? counter2[i] += 1 : counter2[i] = 1
  }

  // loop thru object1
  for(let key of counter1) {
    // check if key exists in object 2
    // return false if key does not exist  
    if (!(key in counter2)) {
      return false
    }

    // if exists, check values match
    // return false if values do not match
    if (counter1[key] !== counter2[key]) {
      return false
    }   
  } 
  
  // if made it thru loop, return true
  return true
}