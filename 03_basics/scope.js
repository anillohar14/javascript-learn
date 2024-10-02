// lets start with scope scope is nothing but set of curly braces {} in which code is written 
// There are many types of scope 
// 1) global scope which is used through_out the code 
const name = "anil";
function prints(name){
    console.log(`Printing the vlaue by using GLobal Scope : ${name}`)
}

prints (name);
console.log();
console.log();

// 2) block scope which is used on in the curly braces {}
if (true) {
    let a = 1
    let b = 2
    let c = 3

    console.log(`Printing the vlaue by using Block Scope : ${a}`)
}
console.log();
console.log();

// NOTE : It is prefered to use LET and CONST dataype in industary. 
// Because there is VAR dataype also which create confussion in code 

//  example

if (true) {
    let a = 2
    const b = 5
    var c = 6
}

// If I try to print the value of var it will print it
// and this is vilolating the rule of block scope
console.log(`Printing the variable c of var datatype: ${c}`);
console.log();
console.log();


// Let solve some tricky Questions


function one(){
    const user = "anil"

    function two(){
        const website = "youtube"

        console.log(`From Inner function : ${website}`);
        console.log();
    }
    
    // console.log(website) this line will generate an error of website is undefine
    console.log()
}

// one() This line will wont execute


// Now lets learn about the declaration of funtion and its different ways
// there are basically two ways
// 1)

console.log(`1st way to declare function : ${add(5)}`) // In this way I can call the function before and after the code of add function.
function add(num){
    return num + 1
}
console.log();

// 2)

sum(3)
const sum = function(num1){  // In this way we cannot get ouput of sum before initialization
    return num1 + 4
}
