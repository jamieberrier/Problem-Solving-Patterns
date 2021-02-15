/* Helper Method Recursion Pattern
  function outer(input) {
    
    var outerScopedVariable = []

    function helper(helperInput) {
      // modify the outerScopedVariable
      helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
  }

  outer(arr)
*/

function collectOddValues(arr){
    
  let result = [];

  function helper(helperInput){
    if(helperInput.length === 0) {
      return;
    }
    
    if(helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }
    
    helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])