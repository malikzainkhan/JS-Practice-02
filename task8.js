var favoriteCity = prompt(
  "What is your favorite Pakistani city?"
).toLowerCase();

if (
  favoriteCity === "lahore" ||
  favoriteCity === "karachi" ||
  favoriteCity === "islamabad"
) {
  alert("Aapke sheher ki khubsurati toh alag hi hai! (Big city)");
} else {
  alert("Aapke sheher ki khubsurati toh alag hi hai! (Small city)");
}
