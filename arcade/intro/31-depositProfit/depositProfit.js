function depositProfit(deposit, rate, threshold) {
  // let total = deposit;
  // let years = 0;
  // while (total < threshold) {
  //     total *= rate / 100 + 1;
  //     years++;
  // }
  // return years;
  return Math.ceil(Math.log(threshold / deposit) / Math.log(rate / 100 + 1))
}
