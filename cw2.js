// Store variables
let studentName = "Rahul";
let correctAnswers = 4;
let wrongAnswers = 1;

// Function to calculate final score
function getFinalScore(name, correct, wrong) {
    return name === "Unknown" 
        ? "Invalid Student" 
        : (correct * 4) - (wrong * 1);
}

// Call the function
let result = getFinalScore(studentName, correctAnswers, wrongAnswers);

// Print the result
console.log(result);

// Print the type of the result
console.log(typeof result);