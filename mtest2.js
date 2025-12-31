const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let n = Number(input);

for (let i = 1; i <= 10; i++) {
  let result = n * i;
  console.log(n + " x " + i + " = " + result);
}