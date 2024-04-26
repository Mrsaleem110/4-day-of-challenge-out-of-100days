// *Question 12:* Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var Names = ["muhammad saleem", "Naqash", "waseem", "hamza"];
for (var _i = 0, Names_1 = Names; _i < Names_1.length; _i++) {
    var Name = Names_1[_i];
    console.log("Hello ".concat(Name, ", would you like to learn some TypeScript today?"));
}
