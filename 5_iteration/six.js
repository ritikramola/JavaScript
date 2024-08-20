// const myarr = ["java","ruby","cpp","python"]

// //we can not hold foreach in any form eg
// const values= myarr.forEach( (item) =>{
//     return item ///will give undefined
//     //console.log(item); undefined
    
// })
// //console.log(values) ; //same undefined


//how to return values in array
//using filter

const myNums = [1,2,3,4,5,6,7,8]

const newNum = myNums.filter((num)=> num>4)
//console.log(newNum);  //[ 5, 6, 7, 8 ]


const newNum2 = myNums.filter((num)=> {
    return num>4})
//console.log(newNum);  //[ 5, 6, 7, 8 ]

//we can also use this with forEach using new array = []




