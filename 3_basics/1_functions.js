// function sayMyName()
// {
//     console.log("R");
//     console.log("i");
//     console.log("t");
//     console.log("i");
//     console.log("k");    
// }

// sayMyName()

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1+number2); 
// }
function addTwoNumbers(number1, number2)
{
    let sum = number1+number2
    return sum 
}

 let one = addTwoNumbers(4,5)
// console.log(one);
 

function loginUserMessage(username){
    return `${username} just logged in`
}

let print = loginUserMessage("Ritik")
//console.log(print);


//rest operator ...
//after using rest we can take any number of inputs

function calcCartPrice(...num1){
    return num1

}

//console.log(calcCartPrice(200,400,500))


function calcCartPrice(val1,val2,...num1){ //val1 and val2 will take first 2 parameters passed
    return num1

}

//console.log(calcCartPrice(200,400,500))

//object

const user ={
    myName : "Ritik",
    age : 22
}

function handleObject(anyobject){ //we will use anyobject instead of object name i.e user(here)
   // console.log(`Username is ${anyobject.myName} and age is ${anyobject.age}`);
    
}
handleObject(user)

//array

const myArr = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArr));

