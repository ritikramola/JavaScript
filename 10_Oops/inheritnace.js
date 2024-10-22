class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

//using extends teacher can take prop of User

class Teacher extends User{
    constructor(username,email,password){

        super(username)
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const Rit = new Teacher("Ritik","Rit@gmail.com","abc")

Rit.addCourse()  //A new course is added by Ritik
Rit.logMe()  //Username is    Ritik

const Golu = new User("Golu")

//Golu.addCourse()  //error
Golu.logMe()  //Username is     Golu

