// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const arr = fruits.split(", ");
  console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const arr = array.reverse();
  console.log(arr);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const arr = array.slice(2);
  console.log(arr);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const scored = students.filter((student) => student.score === 90);
  console.log(scored);
}

// Q6. make an array of enrolled students
{
  const enrolled = students.filter((student) => student.enrolled);
  console.log(enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scores = students.map((student) => student.score);
  console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
  const failed = students.filter((student) => student.score < 50);
  console.log(failed);
}

// Q9. compute students' average score
{
  const average =
    students
      .map((students) => students.score)
      .reduce((prev, curr) => prev + curr) / students.length;
  console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const str = students.map((student) => student.score).toString();
  console.log(str);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const sortedStr = students
    .map((student) => student.score)
    .sort()
    .toString();
}
