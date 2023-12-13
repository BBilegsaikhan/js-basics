let sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum enim eu lobortis pharetra. Etiam dictum posuere ipsum vel tincidunt. Maecenas eu orci sed lacus aliquam porta. Sed efficitur scelerisque diam, et rhoncus nibh pharetra sit amet. Fusce at malesuada risus. Duis est lacus, molestie sed scelerisque non, eleifend eu tellus. Vivamus fermentum condimentum lorem, quis auctor tortor congue eget.
 
Phasellus sed molestie metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat ligula accumsan nulla convallis gravida. In orci arcu, tristique eu tincidunt a, aliquam tristique tortor. In hac habitasse platea dictumst. Suspendisse ullamcorper, felis in lobortis ultrices, elit justo tempor est, molestie blandit risus magna vel est. Sed eget tortor molestie, mattis ante vitae, congue enim. Donec feugiat nibh id ipsum ultrices mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a sollicitudin ante. Aliquam ac erat sem. Pellentesque suscipit convallis ante quis lobortis. In nec laoreet lectus. Integer eu sapien maximus, rhoncus eros vitae, lacinia lorem. Praesent in velit placerat, congue arcu ut, vestibulum urna. Sed tortor turpis, mattis id diam sed, venenatis rhoncus libero.`;
function countLetter(a) {
  let count = 0;
  let letter = String.fromCharCode(a);
  let bigLetter = String.fromCharCode(a - 32);
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == letter || sentence[i] == bigLetter) {
      count++;
    }
  }
  return count;
}
function allLetter(b) {
  for (i = 97; i < 123; i++) {
    countof = countLetter(i);
    console.log(String.fromCharCode(i), ":", countof);
  }
}
allLetter(sentence);
function seperateArray(data) {
  let a = [];
  let pos = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "\n") {
      a[count] = [];
      for (let j = pos; j < 1; j++) {
        a[count] += data[j];
      }
      pos = i + 1;
      count++;
    }
  }
}
seperateArray(sentence);
function seperateWord(words) {
  let a = [];
  let pos = 0;
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] == "") {
      a[count] = "";
      for (let j = pos; j < 1; j++) {
        a[count] += words[j];
      }
      pos = i + 1;
      count++;
    }
  }
}
seperateWord(sentence);
