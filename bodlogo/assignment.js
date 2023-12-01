let city = [
  "Ulaanbaatar",
  "Beijing",
  "Washington",
  "London",
  "Bern",
  "Berlin",
  "Canberra",
  "Ottawa",
];
console.log(city[0]);
console.log(city[1]);
console.log(city[2]);
console.log(city[3]);
console.log(city[4]);
console.log(city[5]);
console.log(city[6]);
console.log(city[7]);
let usa = {
  NewYorkCity: { City: "NewYork", population: "8,400,000" },
  LosAngelescity: { City: "LosAngeles", population: "3,971,883" },
  Chicagocity: { City: "Chicago", population: "2,720,546" },
  Brooklyncity: { City: "Brooklyn", population: "2,300,664" },
  Houstoncity: { City: "Housten", population: "2.296.224" },
  Queenscity: { City: "Queens", population: "2,272,771" },
  Philadelphiacity: { City: "Philadelphia", population: "1,567,442" },
  Phoenixcity: { City: "Phoenix", population: "1,563,025" },
  Manhattan: { City: "NewYorks", population: "1,487,536" },
  SanAntoniocity: { City: "SanAntonia", population: "1,469,845" },
  SanDiegocity: { City: "SanDiego", population: "1,300,110" },
  TheBronxcity: { City: "TheBronx", population: "1,385,108" },
  Dallascity: { City: "Dallas", population: "1,300,092" },
  SanJosecity: { City: "SanJose", population: "1,026,908" },
  Austincity: { City: "Austin", population: "931,830" },
};
console.log(usa);
console.log(usa.LosAngelescity);

function loan(salary, insurance, passport, identitycard, person, cred, dept) {
  if (
    salary > 2000000 &&
    insurance == "yes" &&
    (passport == "yes" || identitycard == "yes") &&
    (person == "yes" || cred == "yes") &&
    dept < 1000000
  ) {
    console.log("You can lend money");
  } else {
    console.log("You can't lend money");
  }
}
loan(2500000, "yes", "yes", "no", "no", "yes", 900000);

function weather(today) {
  if (today == "raining" || today == "snowing" || today == "sunny") {
    console.log("if its raining today,take umbrella ");
  } else {
    console.log("if its snowing,take umbrella");
  }
}
weather("sunny");
