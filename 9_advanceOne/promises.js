const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();   //used to make connection with then
    },1000)
})

promiseOne.then(function(){
    console.log("Promised consumed");
})




new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("Async task 2");
    resolve()    
    },1000)
}).then(function(){
    console.log("Async two done");
})




const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "CHai", email : "ex@mail.com"});
    },1000)
})

promiseThree.then(function(user){  //name can be anything
    console.log(user);              //eg: user,hehe,xyz
})




const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false    //false and true
        if(!error) {
            resolve({username: "Ritik",password:"1234"})
        }else{
            reject("ERROR:Something went Wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);          //for false this will work
    return user.username
}).then((username)=>{           //chaining then after then
    console.log(username);
}).catch(function(error){       //for true this will work
    console.log(error);
}).finally(()=>{ console.log("The promise is either resolved or rejected");
})      //this will work on both the cases



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Javas",password:"1234"})    //error = false this is o/p
        }else{
            reject("ERROR:Js went Wrong")
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;  //response is used to handle true condition
        console.log(response);  
    } catch (error) {
        console.log(error);   
    }
}

consumePromiseFive()



//async code using try and catch

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//         const data = await response.json()
//         console.log(data);
//     }
//      catch (error) {
//         console.log("E: ",error);    
//     }
// }

//getAllUsers()



//async code using .then() ,  .catch() ,  .finally()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})