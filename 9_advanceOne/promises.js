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

promiseThree.then(function(user){
    console.log(user);
    
})