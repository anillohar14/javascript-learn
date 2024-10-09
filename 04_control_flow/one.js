// if

const temprature = 40;

if (temprature <= 40) {
        // console.log(`Temperature is normal: ${temprature}`)
} 

// if else

const score = 100

if (score < 100) {
    // console.log(`Not sufficient score to unlock next level : ${score}`);
}
else{
    // console.log(`You can move to next level : ${score}`)
}

// else if

const balance = 100

if (balance < 1000) {
    console.log(`Please maintain your balance above 1000 !`);
    console.log(`Your current balance is ${balance}`)
}
else if (balance > 1000) {
    console.log(`You are not ilegible for loan`);
    console.log(`Your current balance is ${balance}`)    
}
else if (balance > 2000) {
    console.log(`You are ilegible for loan`);
    console.log(`Your current balance is ${balance}`)
}
else{
    console.log(`your current balance is: ${balance}`)
}