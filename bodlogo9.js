function findNum(x, y, z) {
  let result = [];

  for (let i = x; i <= y; i += z) {
    result[result.length] = i;
  }

  console.log(result);
}

findNum(10, 20, 2);
