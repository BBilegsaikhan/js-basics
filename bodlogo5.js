let news = [
  {
    title: "Comeback in 2024",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/06",
    author: "James",
    category: "Music",
  },
  {
    title: "Comeback in 2024-2",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/07",
    author: "James",
    category: "Sports",
  },
  {
    title: "Comeback in 2024-3",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/08",
    author: "James",
    category: "Entertainment",
  },
  {
    title: "Comeback in 2024-4",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/09",
    author: "James",
    category: "Finance",
  },
  {
    title: "Comeback in 2024-5",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/10",
    author: "James",
    category: "Marketing",
  },
  {
    title: "Comeback in 2024-6",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/11",
    author: "James",
    category: "Marketing",
  },
  {
    title: "Comeback in 2024-7",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/12",
    author: "James",
    category: "Marketing",
  },
  {
    title: "Comeback in 2024-8",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/13",
    author: "James",
    category: "Marketing",
  },
  {
    title: "Comeback in 2024-9",
    desc: "Band called Arctic Monkeys comeback again",
    publishDate: "12/14",
    author: "James",
    category: "Marketing",
  },
];
function filterbyDate(bydate, num) {
  let swit;
  for (let i = 0; i < news.length; i++) {
    for (let a = i + 1; a < news.length; a++)
      if (news[i].pubDate > news[a].pubDate) {
        swit = news[i];
        news[i] = news[a];
        news[a] = swit;
      }
  }
  let foundNews = [];
  let count = 0;
  if ((bydate = "first")) {
    for (let b = 0; b < num; b++) {
      foundNews[count] = news[b];
      count++;
    }
  } else if ((bydate = "Last")) {
    for (let c = news.length - num; c < news.length; c++) {
      foundNews[count] = news[c];
      count++;
    }
  }
  return foundNews;
}
let oldDate = filterbyDate("First", 5);
console.log("Old News", oldDate);
