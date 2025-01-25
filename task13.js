var price = parseFloat(prompt("Enter the price of the product:"));
var membershipStatus = prompt("Enter your membership status (Gold or Platinum):").toLowerCase();

if (membershipStatus === "gold" || membershipStatus === "platinum") {
    if (price >= 1000) {
        alert("Aapko discount mil raha hai!");
    } else {
        alert("Product ki price Rs. 1000 se kam hai.");
    }
} else {
    alert("Aapka membership status Gold ya Platinum nahi hai.");
}