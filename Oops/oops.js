const user = {
    username : "Ritik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got detail from database");
        //console.log(`Username is ${this.username}`); //this defines context
        console.log(this); //gives all user details
        
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //gives {} as output


const promiseOne =  new Promise()
const date = new Date()

// new is for creating new context 
//also called constructor function

function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn - isLoggedIn;

    //return this //we can access this value using this
}

// const userOne = User('Ritik',8,true)
// const userTwo = User("Ramola",12,false)
console.log(userOne);

//if we do like this userTwo will override userOne


//to use it differently we should use (new) 

const userOne = User('Ritik',8,true)
const userTwo = User("Ramola",12,false)

console.log(userOne)
