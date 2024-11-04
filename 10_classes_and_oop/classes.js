// class user {
//     constructor(username, age, gender){
//     this.username = username
//     this.age = age,
//     this.gender = gender
//     }

//     capitalName(){
//        return `USER : ${this.username.toUpperCase()}`
//     }
//     capitalGender(){
//         return `GENDER : ${this.gender.toUpperCase()}`
//     }
// }

// const kiran = new user("kiran",44, "male")

// console.log(kiran.capitalName());
// console.log(kiran.capitalGender());

//Old Method

function user(username, age, gender){
    this.username = username
    this.age = age,
    this.gender = gender
}

user.prototype.capitalName = function(){
    return `USER : ${this.username.toUpperCase()}`
}

user.prototype.capitalGender = function(){
    return `GENDER : ${this.gender.toUpperCase()}`
}

const shakshi = new user("shakshi", 14, "female")

console.log(shakshi.capitalGender());
console.log(shakshi.capitalName());
