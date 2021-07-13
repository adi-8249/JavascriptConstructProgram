let readline = require('readline-sync');
let x = readline.question("Enter a number here : ");
let y = readline.question("Enter a number here : ");
let z = readline.question("Enter a number here : ");

//Operations
let a=x+y*z;
console.log("Value of a is : "+a);
let b=z+x/y;
console.log("Value of b is : "+b);
let c=x%y+z;
console.log("Value of c is : "+c);
let d=x*y+z;
console.log("Value of d is : "+d);
//To Find Maximum Value
let Max_Number=Math.max(a,b,c,d);
//To Find Minimum Value
let Min_Number=Math.min(a,b,c,d);
console.log("Maximum Number is : "+Max_Number+" "+"Minimum Number: "+Min_Number);
