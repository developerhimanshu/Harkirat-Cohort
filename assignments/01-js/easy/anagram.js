/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let ar1 = [];
  let ar2 = [];
  for (let i = 0; i < str1.length; i++) {
    ar1.push(str1[i]);
  }
  for (let i = 0; i < str2.length; i++) {
    ar2.push(str2[i]);
  }
  ar1.sort();
  ar2.sort();
  if (ar1.toString() === ar2.toString()) return true;
  return false;
}

module.exports = isAnagram;
