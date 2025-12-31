const fs = require("fs");

let id = Number(fs.readFileSync(0, "utf8"));

let students = [
  { id: 1, name: "Rajesh" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Sruthi" }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].id === id) {
    console.log(students[i].name);
    break;
  }
}