// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
 
const email = ["anil@gmail.com"]
if (email) {
    console.log(`your email id is : ${email}`)
}
else{
    console.log(`please enter an email id`)
}

// method to find wheater the array is empty or not

if (email.length === 0) {
    console.log(`Array is empty`);
}
else{
    console.log(`Array is not empty`);
}


// Method to find weather the object is empty or not

const emptyobj = {}
if (Object.keys(emptyobj)=== 0) {
    console.log(`Object is empty`)
}
else{
    console.log(`Object is not empty`)
}

// Nullish Coalescing Operator (??): null undefined

val1 = 1 ?? 2;
console.log(val1);

val2 = null ?? 3;
console.log(val2);

val3 = null ?? undefined
console.log(val3);

val4 = val3 ?? val2 ?? val1;
console.log(val4);

// Terniary Operator

// condition ? true : false

const devansh = "lazy";

devansh == "lazy" ? console.log(`true`) : console.log(`false`);