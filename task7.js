var hasDriversLicense = 
prompt(
  "Do you have a driver's license? (yes or no)"
).toLowerCase();

if (hasDriversLicense !== "yes") {
  alert("Aapke paas driving license nahi hai!");
} else {
  alert("Aapke paas driving license hai.");
}
