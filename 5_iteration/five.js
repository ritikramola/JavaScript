// for each 

const coding =["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {  //using function
//     //operation
//     console.log(item);
    
// } )



// using arrow operation
// coding.forEach(  ( num) =>{
//     console.log(num);
    
// })


// function printMe(item){
//     console.log(item);
    
// }

//coding.forEach(printMe)

coding.forEach( (item,index,arr)=> {
        //console.log(item,index,arr);
        
})


//object ia an array

const myCoding = [
    {
        languageName:"javascript",
        langFileName:"js"
    },
    {
        languageName:"python",
        langFileName:"py"
    },
    {
        languageName:"c++",
        langFileName:"cpp"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.langFileName)
})