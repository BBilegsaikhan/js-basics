function findAlp() {
  //let alphabet = `abcdefghijklmnopqrstuvwxyz`;
  //let alphaCap = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let count = 0;
  let countarr = [];
  let str = "";
  let sentence = `In the loveliest town of all, where the houses were white and high and the elms trees were green and higher than the houses, where the front yards were wide and pleasant and the back yards were bushy and worth finding out about, where the streets sloped down to the stream and the stream flowed quietly under the bridge, where the lawns ended in orchards and the orchards ended in fields and the fields ended in pastures and the pastures climbed the hill and disappeared over the top toward the wonderful wide sky, in this loveliest of all towns Stuart stopped to get a drink of sarsaparilla.`;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      countarr[count] = str;
      str = "";
      count++;
    } else {
      str = str + sentence[i];
    }
  }
  console.log(countarr);
}
findAlp();
