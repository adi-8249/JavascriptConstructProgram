//Getting random 3 digit value
let firstNumber=Math.floor(Math.random()*900)+100;
let secondNumber=Math.floor(Math.random()*900)+100;
let thirdNumber=Math.floor(Math.random()*900)+100;
let FourthNumber=Math.floor(Math.random()*900)+100;
let FifthNumber=Math.floor(Math.random()*900)+100;
console.log("first value"+firstNumber+"Second value"+secondNumber+"Third value"+thirdNumber+"fourth value"+FourthNumber+"FifthValue"+FifthNumber);
//max value
let maximum =Math.max(firstNumber,secondNumber,thirdNumber,FourthNumber,FifthNumber);
console.log("Max value is " +maximum);
//min value
let minimum =Math.min(firstNumber,secondNumber,thirdNumber,FourthNumber,FifthNumber);
console.log("Min value is " +minimum);