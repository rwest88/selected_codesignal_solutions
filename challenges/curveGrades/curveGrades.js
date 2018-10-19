function curveGrades(percentages) {
    
  let mean = percentages.reduce((a, c) => (a + c)) / percentages.length;

  let stdev = Math.sqrt(percentages
    .map(e => (e - mean) ** 2)
    .reduce((a, c) => (a + c)) / (percentages.length - 1)
  );

  return percentages.map(e => {
    if (e > mean + stdev) return "A";
    else if (e > mean) return "B";
    else if (e > mean - stdev) return "C";
    else if (e > mean - stdev * 2) return "D";
    else return "F";
  });
}
