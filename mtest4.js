
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero is not allowed";
    }
    return a / b;
  }
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calc = new Calculator();

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (+, -, *, /): ", (op) => {
      const a = Number(num1);
      const b = Number(num2);

      let result;
      switch (op) {
        case "+":
          result = calc.add(a, b);
          break;
        case "-":
          result = calc.subtract(a, b);
          break;
        case "*":
          result = calc.multiply(a, b);
          break;
        case "/":
          result = calc.divide(a, b);
          break;
        default:
          result = "Invalid operation!";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});