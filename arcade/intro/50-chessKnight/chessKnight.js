function chessKnight(cell) {
  let moves = [
      [2, 3, 4, 4],
      [3, 4, 6, 6],
      [4, 6, 8, 8],
      [4, 6, 8, 8]
  ];
  
  let x = cell.charCodeAt(0) - 97;
  let y = parseInt(cell[1]) - 1;
  
  if (x >= 4) x = Math.abs(x - 7);
  if (y >= 4) y = Math.abs(y - 7);
  
  return moves[x][y];
}
