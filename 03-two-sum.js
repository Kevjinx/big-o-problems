function badTwoSum(arr, targetSum) {      //O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return true;
      }
    }
  }
  return false;
}



function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
  arr.sort();
  let ree= []
  arr.forEach((ele, i) => {
    if (targetSum < ele) ree = arr.slice(0, i)
  })
  return badTwoSum(ree, targetSum)
}




function okayTwoSum2(arr, targetSum) {
  // Code goes here ...

}




// [1, 4,8, 9, 1, 0, 3 ,4] 7
// iterate arr
// add 4 and 3 into obj,

// obj = {
//   1: 1,
//   2: 2,
//   3: 8,
//   4: 6,
//   5: 2,
// }


// obj[1] + obj[4] ===


//twoSum has O of n, linear
function twoSum(arr, targetSum) {
  // Code goes here ...
  let obj = {}
  arr.forEach((ele, i) => {
    if (!ele in obj) obj[i] = ele
  })
  for (key in obj) {
    let nextKey = key+1
    if (obj[key] + obj[nextKey] === targetSum) return true
  }
  return false;

}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...

}
