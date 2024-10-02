// Functins are use to repeated the similar code by more than one time

function callMyName (){
    console.log("A")
    console.log("I")
    console.log("N")
    console.log("L")
}

console.log(callMyName());


// functions used for the sum of two numbers

function sum(num1,num2){
    return num1 + num2
}

console.log(`Printing the sum of two numbers by sum function : ${sum(2, 3)}`);


// created function for online cart system used to calculate the total price of all products

function CartTotalPrice(...price1){ // this is know as perameters
    console.log(...price1)   
}

CartTotalPrice(200, 700, 500, 3000); // this is knows as arguments

// Now passing object as a arguments

const user = {
    country : "India",
    Age : 19,
    Gender : "Male",
    UserName : "devansh_malviya@gmail.com"
}
console.log();



function anyobject(anyobject){
    console.log(`Printing user name from an object : ${anyobject.UserName}`);
    console.log(`printing country name from an object : ${anyobject.country}`);
}

anyobject(user);

console.log();
console.log();


// Now passing values from an array in functions

const arr1 = [1, 2, 3, 4];

function FindingValueArray(anyarray){
    console.log(`Printing values from an array by its index number: ${anyarray[1]}`);
}

FindingValueArray(arr1)

console.log();
console.log();