var numberOfLanguages = prompt("which languages do you speak?");
var languages = prompt("Enter the languages you speak (separated by commas)").toLowerCase().split(',');

if (numberOfLanguages > 3) {
    alert("Aapke zubaan ka ilm toh bahut hai! (You know many languages!)");
} else {
    alert("Aapke zubaan ka ilm toh bahut nahi hai! (You don't know many languages!)");
}