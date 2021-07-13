//Taking user input of year
let readline =  require('readline-sync');
console.log("Check year is a leap or Not");
let year = readline.question("Enter year here: ");
if(year % 4 == 0 && year % 100 !=0 || year % 400 == 0)//checking the three conditions here
console.log("Year is Leap year");
else
console.log("Year is not a leap year");