let readline = require('readline-sync');
let number = readline.question("Enter a number here : ");
if(number == 1)
console.log("Unit");
else if(number == 10)
console.log("Ten");
else if(number == 100)
console.log("Hundred");
else if(number == 1000)
console.log("Thousand");
else
console.log("Entered wrong input");