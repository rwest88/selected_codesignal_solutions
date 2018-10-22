class CodeSignal {
  boolean checkPalindrome(String s) {
    if (new StringBuilder(s).reverse().toString().equals(s)) return true;
    return false;
  }
}
