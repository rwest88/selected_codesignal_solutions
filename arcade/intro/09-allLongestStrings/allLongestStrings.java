class CodeSignal {
  String[] allLongestStrings(String[] inputArray) {
    int maxLength = 0;
    for (String str : inputArray) {
      if (str.length() > maxLength) maxLength = str.length();
    }
    final int max = maxLength;
    return Arrays
      .stream(inputArray)
      .filter((String s) -> max == s.length())
      .toArray(String[]::new);
  }
}