function minesweeper(m) {
    
  // add border of falses
  for (let i in m) {
    m[i].unshift(false);
    m[i].push(false);
  }
  let row = [];
  for (let j in m[0]) row.push(false);
  m.unshift(row);
  m.push(row);

  // for each square find num of surrounding trues and build new array row by row
  let mines = [];
  for (let i = 1; i < m.length - 1; i++) {
    let row = [];
    for (let j = 1; j < m[0].length - 1; j++) {
      let square = 0;
      let surround = [];
      surround.push(
        m[i-1][j-1], m[i-1][j], m[i-1][j+1],
        m[i][j-1],                m[i][j+1],
        m[i+1][j-1], m[i+1][j], m[i+1][j+1]
      );
      for (let k of surround) if (k) square++;
      row.push(square);
    }
    mines.push(row);
  }
  return mines;
}