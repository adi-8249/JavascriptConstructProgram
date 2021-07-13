let readline =  require('readline-sync');
console.log("Select Date and Month Between March 20 - June 20");
let date = readline.question("Enter Date : ");
let month = readline.question("Enter Month : ");
if(month >=3 && month <= 6) 
if(month ==3 && date <= 20 || month == 6 && date >= 20)
console.log("False");
else
console.log("True");
else
console.log("Invalid entry, status is False");