// PROMPT THE USER TO INPUT THE STUDENT'S MARKS BY IMPORTING THE PROMPT FUNCTION FROM PROMPT SYNC 
const prompt = require('prompt-sync')();

const mark = prompt("Enter the student's mark: ");
// use the if function to check if the input is a valid number betwwen 0 and 100
if ( mark >= 0 && mark <= 100) {
    const grade = calculateGrade(mark);
    console.log("Grade:", grade);
} else {
    // display a message to show the input is invalid 
    console.log("Please enter a valid mark between 0 and 100.");
}
// calculate the student's grade based on the given information
function calculateGrade(mark) {
    if (mark > 79) {
        return "A";
    } else if (mark >= 60) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else if (mark >= 40) {
        return "D";
    } else {
        return "E";
    }
}
