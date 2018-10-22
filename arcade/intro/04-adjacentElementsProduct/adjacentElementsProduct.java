class CodeSignal {
  int adjacentElementsProduct(int[] inputArray) {
    int largestProduct = -1000;
    for (int i = 0; i < inputArray.length - 1; i++) {
        int curProduct = inputArray[i] * inputArray[i+1];
        if (curProduct > largestProduct) largestProduct = curProduct;
    }
    return largestProduct;
  }
}