var age = parseInt(prompt("Enter your age:"), 10);
var gradeLevel = parseInt(prompt("Enter your grade level (11 or 12):"), 10);
var gpa = parseFloat(prompt("Enter your GPA:"));

if (age >= 17) {
    if (gradeLevel === 11 || gradeLevel === 12) {
        if (gpa >= 3.5) {
            alert("Aap scholarship ke liye eligible hain!");
        } else {
            alert("Aapka GPA 3.5 se kam hai.");
        }
    } else {
        alert("Aapka grade level 11 ya 12 nahi hai.");
    }
} else {
    alert("Aapki age 17 se kam hai.");
}