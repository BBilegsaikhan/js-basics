function countLet() {
  let longsentence = `In the loveliest town of all, where the houses were white and high and the elms trees were green and higher than the houses, where the front yards were wide and pleasant and the back yards were bushy and worth finding out about, where the streets sloped down to the stream and the stream flowed quietly under the bridge, where the lawns ended in orchards and the orchards ended in fields and the fields ended in pastures and the pastures climbed the hill and disappeared over the top toward the wonderful wide sky, in this loveliest of all towns Stuart stopped to get a drink of sarsaparilla.`;
  let count = 0;
  for (let i = 0; i < longsentence.length; i++) {
    if (longsentence.charAt(i) == "a" || longsentence.charAt(i) == "A") {
      count++;
    }
  }
  console.log(count);
}
countLet();
