//Generate a Random single Digit Number using Ramdom function
let number = Math.floor(Math.random()*10);
console.log("Single digit random number is " + number);
//Use Random to get Dice number
let Dicenum = Math.floor( Math.random() * 6 ) +1;
console.log("Random DiceNumber is " + Dicenum);
//Adding two random dicenum and printing 
let dicenum1 = Math.floor(Math.random() * 6) +1;
console.log("First dice random num is " +dicenum1);
let dicenum2 = Math.floor(Math.random() * 6) +1;
console.log("Second dice random num is " +dicenum2);
let result = dicenum1 + dicenum2;
console.log("Addition is " + result);
//Taking 5 random number of two digit 
let Random1=Math.floor(Math.random() * 90 + 10)
console.log("Random 1" + Random1);
let Random2=Math.floor(Math.random() * 90 + 10)
console.log("Random 2" + Random2);
let Random3=Math.floor(Math.random() * 90 + 10)
console.log("Random 3" + Random3);
let Random4=Math.floor(Math.random() * 90 + 10)
console.log("Random 4" + Random4);
let Random5=Math.floor(Math.random() * 90 + 10)
console.log("Random 5" + Random5);
console.log("Five Random Two Digit Number are: "+Random1+" "+Random2+" "+Random3+" "+Random4+" "+Random5);