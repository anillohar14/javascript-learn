const User = {
    _email : "ashwin@gmail.com",
    _password : "12345",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return `${this._password}2323: Encripted Password`
    },

    set password(value){
        this._password = value
    }
}

const anil = Object.create(User)

console.log(anil.email);
console.log(anil.password);

