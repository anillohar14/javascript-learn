function User (password, email){
    this._password = password,
    this._email = email,

    Object.defineProperty(this,"password", {
        get: function(){
            return `This is an Encripted password: ${this._password}Ab4E`
        },

        set: function(value){
            this._password = value
        }
    })
    Object.defineProperty(this,"email", {
        get: function(){
            return `This is an Email: ${this._email.toUpperCase()}`
        },

        set: function(value){
            this._email = value
        }
    })
}

const anil = new User("982044", "ashiwn@gmail.com")

console.log(anil.email);
console.log(anil.assword);
