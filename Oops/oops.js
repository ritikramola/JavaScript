const user = {
    username : "Ritik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got detaisl from database");
        
    }

}

console.log(user.username);
console.log(user.getUserDetails());

