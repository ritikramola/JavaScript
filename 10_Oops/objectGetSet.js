//Object based getter setter

const User = {
    _email: "rit@rit.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const ritik = Object.create(User)
console.log(ritik.email);




