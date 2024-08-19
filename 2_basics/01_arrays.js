// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["ritik","ritik2"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[3]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()         //will automatically pop last digit
// console.log(myArr);

//myArr.unshift(9) //adds at the beggining of an array
//console.log(myArr);
//myArr.shift()   //removes the unshift value or removes the first value


//console.log(myArr.includes(9));
//console.log(myArr.indexOf(4));

const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr); //here type is changed to string

//slice(1,3)  slice will give 2 values i.e (1 and 2) 
//splice(1,3)  it will give 3 values i.e (1,2,3) and it will remove these portion from orginal array

console.log("A",myArr);
const myn1= myArr.slice(1,3)

console.log(myn1)

const myn2= myArr.splice(1,3)
console.log(myn2);
