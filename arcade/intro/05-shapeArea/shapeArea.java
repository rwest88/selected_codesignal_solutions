class CodeSignal {
  int shapeArea(int n) {
    ArrayList<Integer> adders = new ArrayList<>();
    adders.add(0);
    int sum = 0;
    while (n > 0) {
        n--;
        adders.add(n * 4);
    }
    for (int adder : adders) {
        sum += adder;
    }
    return 1 + sum;
  }  
}
