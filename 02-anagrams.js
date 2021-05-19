function firstAnagram(str1, str2) {
  let array1 = str1.split('');
  let array2 = str2.split('');

  while (array1.length > 0) {
    if (!array2.indexOf(array1[0])) {
      return false;
    }
    array1.shift();
  }
  return true;
}



function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
