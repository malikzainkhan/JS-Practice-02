var likesPakistaniMusic = prompt(
  "Do you like Pakistani music? (yes or no)"
).toLowerCase();
var likesIndianMusic = prompt(
  "Do you like Indian music? (yes or no)"
).toLowerCase();

if (likesPakistaniMusic === "yes" && likesIndianMusic === "yes") {
  alert(
    "Aapke music ka taste toh international hai! (You like both Pakistani and Indian music)"
  );
} else if (likesPakistaniMusic === "yes" || likesIndianMusic === "yes") {
  alert(
    "Aapke music ka taste toh international hai! (You like either Pakistani or Indian music)"
  );
} else {
  alert(
    "Aapke music ka taste toh international hai! (You don't like either Pakistani or Indian music)"
  );
}
