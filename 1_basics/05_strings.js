const name = "ritik"
const count = 50

//console.log("my name is " + name + " my repo count is " + count);

//console.log(`my name is ${name} and my repo count is ${count}`);
//we should use this method |^|

//declaring string

const gameName = new String('Ritik-Ram')

//console.log(gameName[0]);


//console.log(gameName.length);

//console.log(gameName.toLowerCase());

//console.log(gameName.toUpperCase());


//console.log(gameName.charAt(2));


//console.log(gameName.indexOf('R'));


const newString = gameName.substring(0,2) //2 not included
//console.log(newString);

const anString = gameName.search('-');

//console.log(anString);

const anotString = gameName.slice(-6,4)

//console.log(anotString);

const StringOne = "  ritik   "

//console.log(StringOne);

//console.log(StringOne.trim());

const url = "https://ritik.com/ritik-ramola"


console.log(url.replace(':','='));//replacing any char
console.log(url)


console.log(url.includes('ritik'));


console.log(url.split('-'));//splits on the basis of -
