class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const ritik=new User("Ritik")
//console.log(ritik.createId());

class teacher  extends User{
    constructor(username,email) {
        super(username);
        this.email = email
    }
}

const iphone = new teacher("iphone","i@phone.com")
//iphone.logMe()  //username:iphone
console.log(iphone.createId()); //willl give error coz static

