// Pattern: Frequency Counter

// Write a function called sameFrequency
// Given 2 positive integers, find out if the 2 numbers have the same frequency of digits

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false

function sameFrequency(num1, num2){
  // declare empty object for each num
  let counter1 = {}
  let counter2 = {}
  // loop thru num1, adding key/values to object1
  for(i of num1.toString()) {
    counter1[i] ? counter1[i] += 1 : counter1[i] = 1
  }
  // loop thru num2, adding key/values to object2
  for(i of num2.toString()) {
    counter2[i] ? counter2[i] += 1 : counter2[i] = 1
  }

  // loop thru object1, 
    // check if key exists in object 2
      // if exists, check values match
        // return false if values do not matcg
    // return false if key doee not exist  
  
    // if made it thru loop, return true
}