let marks = prompt("Enter student's Mark:");

if (mark <0 && mark >100) {
    console.log("Please enter mark between 0 and 100");
}

function calculateGrade(mark) {
    if (mark > 79) {
        return "A";
    } else if (mark >= 60){
        return "B";
    } else if ( mark >= 50){
        return "C";
    } else if ( mark >= 40){
        return "D";
    } else {
        return "E"
    }
}
console.log(calculateGrade(45));
console.log(calculateGrade(87));