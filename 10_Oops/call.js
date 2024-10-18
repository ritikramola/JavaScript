//when and why do we use call


//----this will not give us username--------- 

// function setUsername(username){
//     this.username = username;
//     console.log("called");
    
// }

// function createUser(username,email,password)
// {
//     setUsername(username)

//     this.email = email
//     this.password= password
// }

// const chai = new createUser("chai","chai@microsoft.com","ritik")
// console.log(chai);

//-----we will have to give our this so that it can hold vsalue for us-------

function setUsername(username){
    this.username = username;
    console.log("called");
    
}

function createUser(username,email,password)
{
    setUsername.call(this,username)  //call is used to call the value

    this.email = email
    this.password= password
}

const chai = new createUser("chai","chai@microsoft.com","ritik")
console.log(chai);
