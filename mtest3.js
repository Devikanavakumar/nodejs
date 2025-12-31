const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const students = [
  { id: 1, name: "rajesh" },
  { id: 2, name: "rahul" },
  { id: 3, name: "sruthi" }
];
rl.question("Enter student ID: ", (answer) => {
  const idToFind = Number(answer);
  const student = students.find(s => s.id === idToFind);
  if (student) {
    console.log(`Student with ID ${idToFind} is ${student.name}`);
  } else {
    console.log("No student found with that ID");
  }

  rl.close()
});


  



