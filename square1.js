function hollowSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < 5; i++) {
    //i-n mur ni
    for (let j = 0; j < 5; j++) {
      //j-n bagana ni
      if (i == 0 || i == 5 - 1 || j == 0 || j == 5 - 1) {
        sqrStr += "*";
      } else {
        sqrStr += " ";
      }
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
hollowSqr(5);
