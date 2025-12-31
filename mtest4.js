const fs = require("fs");

let input = fs.readFileSync(0, "utf8").trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let op = input[2];  

class Calculator {
  add(x, y) { return x + y; }
  sub(x, y) { return x - y; }
  mul(x, y) { return x * y; }
  div(x, y) { return y === 0 ? "Cannot divide by zero" : x / y; }
}

let calc = new Calculator();

switch(op) {
  case "add":
    console.log(calc.add(a, b));
    break;
  case "sub":
    console.log(calc.sub(a, b));
    break;
  case "mul":
    console.log(calc.mul(a, b));
    break;
  case "div":
    console.log(calc.div(a, b));
    break;
  default:
    console.log("Invalid operation");
}