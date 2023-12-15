// // Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// let text = "The Quick Brown Fox";
// let swapCase = function (letters) {
//   let newLetters = "";
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === letters[i].toUpperCase()) {
//       newLetters += letters[i].toLowerCase();
//     } else {
//       newLetters += letters[i].toUpperCase();
//     }
//   }
//   console.log(newLetters);
//   return newLetters;
// };
// swapCase(text);

function main(input) {
  let i = 0;
  let string = "";
  let arr = [];
  while (i < input.length) {
    string = input.charAt(i);

    if (string == string.toUpperCase()) {
      string = string.toLowerCase();
      arr += string;
    } else {
      string = string.toUpperCase();
      arr += string;
    }
    i++;
  }
  console.log(arr);
}
main("The Quick Brown Fox");
