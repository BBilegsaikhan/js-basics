function getGrade(x) {
  if (x > 89) {
    console.log("A");
  }
  if (x > 79 && x < 90) {
    console.log("B");
  }
  if (x > 69 && x < 80) {
    console.log("C");
  }
  if (x > 59 && x < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}
getGrade(84);
