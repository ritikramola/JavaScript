//Numbers

const score = 400  //we r not sure if this is number
//console.log(score);

const balance = new Number(100) //here we r sure it is number
//console.log(balance);           //we can perform various activites on it

//console.log(balance.toString()); //converts into string
//console.log(balance.toString().length);

//console.log(balance.toFixed(2)); goves fixed value upto 2

const othernumber = 23.8798667

//console.log(othernumber.toPrecision(3)); gives round off

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-IN'));


//???????????????     MATHS     ?????????????

// console.log(Math);

// console.log(Math.abs(-1));

// console.log(Math.round(5.7));

// console.log(Math.ceil(4.2));

// console.log(Math.floor(4.2));

// console.log(Math.sqrt(144));

console.log(Math.random()); //always b/w 0 1
console.log((Math.random()*10)+1); //to get value b/w 1 to 10
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min + 1)+min)); //to get value b/w min and max

