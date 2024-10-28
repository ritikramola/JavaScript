class User{
    constructor(email,password){
        this.email = email, //  1
        this.password = password
    }

    //both set and gets comes together otherwise gives error
    get email(){
        return this._email.toUpperCase()
    }

    //giving value to email 2 times it shows error(Maximum call stack size exceeded)
    set email(value){
        this._email = value //2
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}
const ritik = new User("Rit@ritik.in","abc")
console.log(ritik.password);
console.log(ritik.email);

