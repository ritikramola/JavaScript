function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));        //25
// console.log(multipleBy5.power);     //2
// console.log(multipleBy5.prototype);     //{}

//PROTOTYPE provides internal property



//function is also an object
//as well as function

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;           //this means jisne bhi bulaya
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

//THIS WILL GIVE ERROR (NICHE WALA)

// const chai = createUser("chai",25)
// const tea = createUser('tea',250)

//TO FIX THIS ERROR WE WILL USE  ------->>> new

const chai = new createUser("chai",25)
const tea = new createUser('tea',250)


chai.printMe()
tea.printMe()