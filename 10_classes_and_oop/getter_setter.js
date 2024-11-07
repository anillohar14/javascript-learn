class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    set password(value){
        this._password = value
    }

    get password(){
        return `${this._password}H134`
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

}


const anil = new User("anil@gmail.com", "12345")

console.log(anil.email);
console.log(anil.password);
