let athlete = [
  {
    name: "Bat",
    age: 20,
    scores: [15, 25, 35, 20],
  },
  {
    name: "Bilguun",
    age: 21,
    scores: [22, 23, 27, 25],
  },
  {
    name: "Bilgee",
    age: 18,
    scores: [30, 32, 33, 31],
  },
  {
    name: "Munkhuu",
    age: 23,
    scores: [12, 14, 18, 16],
  },
  {
    name: "Erdene",
    age: 25,
    scores: [17, 19, 21, 23],
  },
  {
    name: "Enkhee",
    age: 31,
    scores: [7, 9, 10, 12],
  },
  {
    name: "Berkhee",
    age: 29,
    scores: [11, 12, 15, 16],
  },
  {
    name: "Lkhagvaa",
    age: 27,
    scores: [7, 9, 13, 15],
  },
  {
    name: "Hosoo",
    age: 23,
    scores: [14, 17, 21, 24],
  },
  {
    name: "Suren",
    age: 31,
    scores: [5, 8, 13, 17],
  },
];
//function avg() {
//let avg = 0;
//for (let i = 0; i < athlete[1].scores.length; i++) {
//avg = avg + athlete[1].scores[i] / athlete[1].scores.length;
//}
//console.log(athlete[1].name, "average score", avg);
//}
//avg();

//function set() {
//let average = 0;
//for (let i = 0; i < athlete[0].scores.length; i++) {
//average = average + athlete[0].scores[i] / athlete[0].scores.length;
//}
//console.log(athlete[0].name, "average score", average);
//}
//set();
function lowAge() {
  let Age = athlete[0].age;
  for (let i = 0; i < athlete.length; i = i + 1) {
    if (Age > athlete[i].age) {
      Age = athlete[i].age;
    }
  }
  console.log(athlete[2].name, "Low Age", Age);
}
lowAge();
