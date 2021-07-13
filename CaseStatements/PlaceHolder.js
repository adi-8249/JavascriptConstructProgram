let readline = require("readline-sync");
let value = readline.question("Enter a number from this :1,10,100,1000 : ");
let place=parseInt(value)
switch(place)
{
    case 1:
         console.log("Unit");
         break;
    case 10:
         console.log("Ten");
         break;
    case 100:
         console.log("Hundred");
         break;
    case 1000:
         console.log("Thousand");
         break;
    default:
        console.log("U have enter wrong input");
        break;
}