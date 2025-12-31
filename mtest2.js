const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a number: ", (answer) => {
    const num = Number(answer);
     console.log(`Multiplication table of ${num}:`);
     for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
rl.close();
});