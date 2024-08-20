// const userEmail = "ritik@g.com"

// if(userEmail){
//     console.log("Got user email");//this will run
// }else{
//     console.log("don't have user email");
// }  


// const userEmail = ""

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("don't have user email"); //this will run
// }


const userEmail = []

if(userEmail){
    console.log("Got user email"); //this will run
}else{
    console.log("don't have user email");
}

//falsy values:

//false , 0 , -0 ,BigInt (0n),null , undefined , NaN , ""

//truthy values

//"0",'false'," ",[],{},function(){},

//empty arrays
// if(userEmail.length === 0){
//     console.log("Array is empty"); //it will run
    
// }

//empty objects

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }

// false == 0,false =='',0=='' these all gives true

//Nullish Coalescing Operator (??): null undefined

let val1
// val1 = 5 ?? 10      //5
// val1 = null ?? 10   //10
// var1 = undefined ?? 15 //15

val1 = null ?? 10 ?? 20 //10


console.log(val1)

//ternary operator 

condition ? true : false

const Price = 100
Price>=180 ? console.log("less than 80"):console.log("more than 80");
;
