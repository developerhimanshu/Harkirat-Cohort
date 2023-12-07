/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isCase(ch) {
  if (ch === "?" || ch === "," || ch === "!" || (ch === ".") | (ch === " "))
    return true;
  return false;
}
function isPalindrome(str) {
  let ind = str.length - 1;
  str = str.toLowerCase();
  let i = 0;
  while (i < ind) {
    if (isCase(str[i])) {
      i++;
      continue;
    }
    if (isCase(str[ind])) {
      ind--;
      continue;
    }
    if (str[i] !== str[ind]) {
      console.log(str[i] + " " + str[ind]);
      return false;
    }
    i++;
    ind--;
  }
  return true;
}

module.exports = isPalindrome;
