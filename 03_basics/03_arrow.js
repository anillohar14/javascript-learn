const user = {
    username: "anil",
    price : 1000,

    WelcomeMessage : function(name){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }

}

// user.WelcomeMessage();
// user.username = "Devansh"
// user.WelcomeMessage();

// console.log(this);


// function night (){
//     let name = "anil"
//     console.log(this.name)   
// }

// night();

// const night = () => {
//   let  username = "anil"
//     console.log(this)
// }

// night()

// const addnum = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addnum(2,4))  // this is known as deplicite function deplicite means to declare 

// const addnum = (num1 , num2) => num1+num2

// console.log(addnum(4,4)) // this is known as implecite function implecite means to let js understand it automaticaly

// const addnum = (num1 , num2) => (num1 + num2)
// console.log(addnum(4,8))

const addnum = (num1, num2) => ({username: "hitesh"})


console.log(addnum(3, 4))