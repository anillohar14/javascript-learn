const user ={
    name : "anil",
    surname : "lohar",
    age : 20,
    User_name : "Answin14lohar",
    Contact : 910039503,
    Email : "Ashwin14lohar@gmail.com",
    last_login_day : ["Monday", "friday"]
}

//console.log(`Printing data from object by normal method : ${user.last_login_day}`);
//console.log(`Printing data from object by prefered method : ${user["last_login_day"]}`);  // this method is prefered to us in JS

// now by using freeze function the Object user will get freeze and due to this it is not possible to change or Overweite the values

user.Contact = 916855583; // changed the value of contact
//console.log(user.Contact);

// freezing the object
//Object.freeze(user);
// changing the value of contact
user.Contact = 914353463;

console.log(user);


// learning about function
user.greeting = function(){
    console.log("welcome user to JS.");
} 

user.greeting_two = function(){
    console.log(`Welcome user to JS, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting_two());