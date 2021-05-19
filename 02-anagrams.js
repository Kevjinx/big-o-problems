function firstAnagram(str1, str2) {
  let array1 = str1.split('');
  let array2 = str2.split('');

  while (array1.length > 0) {
    if (!array2.indexOf(array1[array1.length -1])) {
      return false;
    }
    array1.pop();
  }
  return true;
}





function secondAnagram(str1, str2) {
  // Code goes here ....
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  arr1.forEach((ele, i) => {
    if (ele !== arr2[i]) return false;
  })
  return true
}





function thirdAnagram(str1, str2) {
  // Code goes here ....
  let obj1 = {}
  let obj2 = {}
  const arr1 = str1.split('')
  const arr2 = str2.split('')
  arr1.forEach(ele => {
    ele in obj1
      ? obj1[ele]++
      : obj1[ele] = 1
  })
  arr2.forEach(ele => {
    ele in obj2
      ? obj2[ele]++
      : obj2[ele] = 1
  })

  for (ele in obj1) {
    if (obj1.ele !== obj2.ele ) return false;
  }

  return true;

}


function fourthAnagram(str1, str2) {
  let obj1 = {}

  const arr1 = str1.split('')
  const arr2 = str2.split('')
  arr1.forEach(ele => {
    ele in obj1
      ? obj1[ele]++
      : obj1[ele] = 1
  });
  for (let i = 0; i < arr2.length; i++) {
    if (obj1.arr2[i]) {
      obj1.arr2[i]--;
    } else {
      return false;
    }
  };
  return true;
}
