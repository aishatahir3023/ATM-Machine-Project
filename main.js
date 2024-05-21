// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person = "Aisha";
console.log("Hello ".concat(person, " would you like to learn some Python today?"));
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name = "Tahir";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.charAt(0));
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1));
//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var JeanPaulsartre = "Everything has been figured out, except how to live";
console.log('Jean Paul Sartre, "Everything has been figured out, except how to live"');
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = 'Albert Einstein';
var Quote = "A person who never made a mistake never tried anything new";
console.log("".concat(famous_person, ": once said, ").concat(Quote));
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name 
//is displayed. Then print the name after striping the white spaces.
var personname = "\t\n AIZAH AHMED \n\t";
console.log(personname);
var stripped = personname.trim();
console.log(stripped);
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
// 8. You should create four lines that look like this:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 6;
console.log("My favorite number is ".concat(favoriteNumber));
//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.
// ctrl + questionmark
var number1 = 10;
var number2 = 20;
// add two numbers
var result = number1 + number2;
// print result
console.log(result);
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// defines an array of names
var names = ["Aisha", "Tahir", "Aizah", "Zahra", "Alisha",];
// loop
// for each
// for of loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// for each
names.forEach(function (names) {
    console.log(names);
});
// for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendnames = names_1[_i];
    console.log(friendnames);
}
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendnames = names_2[_a];
    console.log("Hello ".concat(friendnames, " what is going on today?"));
}
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["motorcycle", "car", "bike", "bus", "train"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i]));
}
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Rani", "Roohi", "Sabeen"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me for dinner?"));
});
//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var unableAttend = guestList.splice(1, 1)[0];
console.log("".concat(unableAttend, " can't make dinner"));
guestList.push("Talat");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me for dinner?"));
});
//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("Great Annoucment! We found a bigger Table");
guestList.unshift("Nosheen");
guestList.splice(Math.floor(guestList.length / 2), 0, "Maryam");
guestList.push("Sana");
console.log(guestList);
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me for dinner?"));
});
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("unfortunately! We have space for only two guests\n");
var guestList1 = guestList.pop();
console.log("Sorry My Dear ".concat(guestList1, " you are not invited"));
var guestList2 = guestList.pop();
console.log("Sorry My Dear ".concat(guestList2, " you are not invited"));
var guestList3 = guestList.pop();
console.log("Sorry My Dear ".concat(guestList3, " you are not invited"));
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " you are still invited"));
}
guestList.pop();
guestList.pop();
guestList.pop();
console.log(guestList);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var places = ["Gilgit", "Naran", "Kaghan", "Islamabad", "Kashmir"];
// point 1
console.log("Orignal order:", places);
// point 2
console.log("Alphabatiacal order:", __spreadArray([], places, true).sort());
// point 3
console.log("Orignal order:", places);
// point 4
console.log("Reverse Alphabatiacal order:", __spreadArray([], places, true).sort().reverse());
// point 5
console.log("Orignal order:", places);
// point 6
console.log("Reverse order:", places.reverse());
// point 7
console.log("Orignal order:", places.reverse());
// point 8
console.log("Alphabatical order:", places.sort());
// point 9
console.log("Reverse Alphabatiacal order:", places.sort().reverse());
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
console.log("You are inviting ".concat(guestList.length, " people to dinner"));
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
var array = ["facepowder", "lipstick", "eyepencil", "shainer"];
array.forEach(function (array) {
    console.log(array);
});
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var Personalinformation = {
    name: "Aisha Tahir",
    age: 38,
    gender: "female",
    nationality: "Pakistani",
    Education: "b.com",
};
console.log(Personalinformation);
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
var array1 = ["1", "2", "3", "4"];
console.log(array1[5]);
console.log(array1[3]);
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log(car !== 'subaru');
console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');
console.log(car !== 'audi');
console.log("Is car =='Suzuki'? I predict True.");
console.log(car == 'suzuki');
console.log(car !== 'suzuki');
console.log("Is car =='Toyota'? I predict False.");
console.log(car == 'Toyota');
console.log(car !== 'Toyota');
console.log("Is car =='BMW'? I predict True.");
console.log(car == 'BMW');
console.log(car !== 'BMW');
console.log("Is car =='Honda'? I predict False.");
console.log(car == 'Honda');
console.log(car !== 'Honda');
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var age = 18;
console.log("Is age == 18? I predict True.");
console.log(age == 18);
// • Tests for equality and inequality with strings
// equality test
console.log("Is car === 'Subaru'? I pradic True.");
console.log(car === 'Subaru');
// inequality test
console.log("Is car!== 'Subaru'? I pradic False.");
console.log(car !== 'Subaru');
// • Tests using the lower case function
console.log("Is car.toLowerCase() =='subaru'? I pradic True.");
console.log(car.toLowerCase() == 'subaru');
console.log("Is car.toLowerCase()!== 'Subaru'? I pradic False.");
console.log(car.toLowerCase() == 'subaru');
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 18? I pradic True.");
console.log(age == 18);
console.log("Is age!= 18? I pradic False.");
console.log(age != 18);
console.log("Is age > 18? I pradic True.");
console.log(age > 18);
console.log("Is age < 18? I pradic False.");
console.log(age < 18);
console.log("Is age >= 18? I pradic True.");
console.log(age >= 18);
console.log("Is age <= 18? I pradic False.");
console.log(age <= 18);
// • Tests using "and" and "or" operators
console.log("Is age == 18 and car =='subaru'? I pradic True.");
console.log(age == 18 && car == 'subaru');
console.log("Is age == 18 or car =='subaru'? I pradic True.");
console.log(age == 18 || car == 'subaru');
console.log("Is age!= 18 and car =='subaru'? I pradic False.");
console.log(age != 18 && car == 'subaru');
console.log("Is age!= 18 or car =='subaru'? I pradic True.");
console.log(age != 18 || car == 'subaru');
// • Test whether an item is in a array
var mycar = [1, 2, 3];
console.log("Is 1 in mycar? I pradic True.");
console.log(1 in mycar);
console.log("Is 4 in mycar? I pradic False.");
console.log(4 in mycar);
// • Test whether a value is contained in a array
var mynewcar = [1, 2, 3];
console.log("test number", !mynewcar.includes(6));
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
var alien_color = 'green';
console.log(alien_color);
if (alien_color == 'green') {
    console.log("The player just earned 5 points");
}
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
var aliencolor = 'yellow';
console.log(aliencolor);
if (aliencolor == 'green') {
    console.log("The player just earned 5 points");
}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
var AlienColor = "green";
if (AlienColor == "green") {
    console.log("The player just earned 5 points");
}
else
    console.log("The player just earned 10 points.");
var Alien_Color = "yellow";
if (Alien_Color == "green") {
    console.log("The player just earned 5 points");
}
else
    console.log("The player just earned 10 points.");
// • Write one version of this program that runs the if block and another that runs the else block.
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var Alien_Color1 = "green";
if (Alien_Color1 === "green") {
    console.log("The player just earned 5 points");
}
else if (Alien_Color1 === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (Alien_Color1 === "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("unnown color");
}
Alien_Color1 = "yellow";
if (Alien_Color1 === "green") {
    console.log("The player just earned 5 points");
}
else if (Alien_Color1 === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (Alien_Color1 === "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("unnown color");
}
Alien_Color1 = "red";
if (Alien_Color1 === "green") {
    console.log("The player just earned 5 points");
}
else if (Alien_Color1 === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (Alien_Color1 === "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("unnown color");
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
var Age = 60;
if (Age < 2) {
    console.log("The person is a baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (Age >= 2 && Age < 4) {
    console.log("The person is a toddler");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (Age >= 4 && Age < 13) {
    console.log("The person is a kid");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (Age >= 13 && Age < 20) {
    console.log("The person is a teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (Age >= 20 && Age < 65) {
    console.log("The person is an adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else if (Age >= 65) {
    console.log("The person is an elder");
}
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
var FavoriteFruit = ["apple", "banana", "orange"];
if (FavoriteFruit.includes("apple")) {
    console.log("I really like apple");
}
if (FavoriteFruit.includes("banana")) {
    console.log("I really like banana");
}
if (FavoriteFruit.includes("orange")) {
    console.log("I really like orange");
}
if (FavoriteFruit.includes("cherry")) {
    console.log("I really like cherry");
}
if (FavoriteFruit.includes("mango")) {
    console.log("I really like mango");
}
//         30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each 
// • If the username is 'admin', print 'Hello admin, would you like to see a status report?' instead.
// • Otherwise, print 'Hello, <username>, thank you for logging in again'
var UserName = ["Ahmed", "Asad", "Abbu", "Ammi", "Admin", "Almir"];
UserName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " thank you for logging in again"));
    }
});
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var UserName1 = ["Ahmed", "Asad", "Abbu", "Ammi", "Admin", "Almir"];
UserName1 = [];
if (UserName1.length === 0) {
    console.log("We need to find some users!");
}
else {
    UserName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, " would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, " thank you for logging in again"));
        }
    });
}
//     32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var Current_Users = ["Ahmed", "Asad", "Abbu", "Ammi", "Almir"];
var New_Users = ["Aisha", "maryam", "Ammi", "Bilal", "Almir"];
New_Users.forEach(function (New_Users) {
    var New_UsersLower = New_Users.toLowerCase();
    var usernameTaken = Current_Users.some(function (Current_Users) { return Current_Users.toLowerCase() === New_UsersLower; });
    if (usernameTaken) {
        console.log("The username ".concat(New_Users, " has already been taken"));
    }
    else {
        console.log("The username ".concat(New_Users, " is available"));
        Current_Users.push(New_Users);
        console.log(Current_Users);
    }
    ;
});
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, Numbers_1 = Numbers; _b < Numbers_1.length; _b++) {
    var oneNumber = Numbers_1[_b];
    var ordinalending = void 0;
    if (oneNumber === 1) {
        ordinalending = "st";
    }
    else if (oneNumber === 2) {
        ordinalending = "nd";
    }
    else if (oneNumber === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalending));
}
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
var Pizza = ["Chicken Tikka", "Malai Pizza", "chicken Mughalai"];
for (var _c = 0, Pizza_1 = Pizza; _c < Pizza_1.length; _c++) {
    var onePizza = Pizza_1[_c];
    console.log("I like ".concat(onePizza, " pizza"));
}
console.log("I really love pizza");
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
var Animals = ["Cow", "Cat", "Camel"];
for (var _d = 0, Animals_1 = Animals; _d < Animals_1.length; _d++) {
    var oneAnimal = Animals_1[_d];
    console.log(Animals);
}
for (var _e = 0, Animals_2 = Animals; _e < Animals_2.length; _e++) {
    var oneAnimal = Animals_2[_e];
    console.log("A ".concat(oneAnimal, " would make a great pet"));
}
console.log("Any of these animals would make a great pet!");
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, message) {
    console.log("The size of the shirt is ".concat(size, " and the message is ").concat(message));
}
make_shirt("Large", "Hello World");
make_shirt("Medium", "Aisha Tahir");
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function Make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is ".concat(size, " and the message is ").concat(message));
}
Make_shirt();
Make_shirt("Medium");
Make_shirt("Small", "I Love my Daughters");
// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle, numberOfTracks) {
    var album = {
        artistName: artistName,
        albumTitle: albumTitle,
        numberOfTracks: numberOfTracks
    };
    return album;
}
console.log(make_album("Aisha", "Aisha Tahir"));
console.log(make_album("Aisha", "Aisha Tahir", 10));
console.log(make_album("Aisha", "Aisha Tahir", 20));
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
var magicians = ["Aisha", "Aizah", "Zahra"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var oneMagician = magicians_1[_i];
        console.log(oneMagician);
    }
}
show_magicians(magicians);
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
    return magicians;
}
console.log(make_great(magicians));
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function make_great1(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
    return magicians;
}
var newMagicians = make_great1(magicians);
console.log(magicians);
console.log(newMagicians);
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(items);
}
sandwiches("Bread", "Chicken", "Mayo");
sandwiches("Butter", "Chees");
sandwiches("Bread", "Egg", "Tomato Ketchup", "cucumber", "garlic sauce");
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function cars(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        features: features
    };
    return car;
}
console.log(cars("Toyota", "Corolla", "Color", "Black"));
console.log(cars("Toyota", "Corolla", "Color", "Black", "Automatic"));
console.log(cars("Toyota", "Corolla", "Color", "Black", "Automatic", "Leather Seats"));
