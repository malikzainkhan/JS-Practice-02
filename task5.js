// Assignment 1: AND Operator
// Program to check if the user is both 25 years old or older AND married

// Ask the user for their age and marital status
const age = parseInt(prompt("Please enter your age:"), 10);
const maritalStatus = prompt("Please enter your marital status (married/single):").toLowerCase();

// Use the AND operator to check the condition
if (age => 25 && maritalStatus == "married") {
    alert("Aap shadi-shuda hain aur 25 saal ke ho chuke hain!")
} else {
    alert("Condition does not match.")
}
