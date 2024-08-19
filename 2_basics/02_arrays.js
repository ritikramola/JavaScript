const heroesM =["thor","iron man","spooderman"]
const heroesDc =["superman","flash","batman"]

//heroesM.push(heroesDc)  //here heroDc will act as 4th element in heroesM

//console.log(heroesM)
//console.log(heroesM[3][0]) //to access element of heroesDc

// const heroes = heroesM.concat(heroesDc)
// console.log(heroes);
//console.log([3])

const allhero = [...heroesM,...heroesDc] //
//console.log(allhero);

const arr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArr = arr.flat(Infinity)
//console.log(realArr);

console.log(Array.isArray("Ritik")) //gives true or false
console.log(Array.from("Ritik")) //gives ['R','i','t','i','k']
console.log(Array.from({name:"ritik"}));//returns empty array []

let score1 = 1000
let score2 = 2000
let score3 = 3900

console.log(Array.of(score1,score2,score3)); // gives [1000,2000,3900]


