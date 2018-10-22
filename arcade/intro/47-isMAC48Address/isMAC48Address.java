class CodeSignal {
  boolean isMAC48Address(String inputString) {
    return inputString.matches("([0-F]{2}-){5}[0-F]{2}");
  }
}