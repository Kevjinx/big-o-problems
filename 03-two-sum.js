function badTwoSum(arr, targetSum) {      //O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] !== targetSum) {
        return false;
      }
    }
  }
  return true;
}


function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
