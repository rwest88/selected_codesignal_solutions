function checkPalindrome(inputString) {
  if (inputString == inputString.split('').reverse().join('')) {
    return true;
  }
  return false;
}

