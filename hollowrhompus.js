function hollowRhompus(size) {
  let hollowRps = "";
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      hollowRps += "-";
    }
  }
  console.log(hollowRps);
}
hollowRhompus(5);
