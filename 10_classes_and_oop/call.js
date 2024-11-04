function setUserName(username){
    return this.username = username
}

function createUser(username, email, password){
    setUserName.call(this,username)
    this.email = email,
    this.password = password
}

const anil = new createUser("anil", "anil@gmail.com", 982044)

console.log(anil);
