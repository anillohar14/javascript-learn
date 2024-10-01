let mydate = new Date;
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTimezoneOffset());
// console.log(mydate.getHours());
// console.log(mydate.getMonth());
// console.log();

// const createddate = new Date(2024, 8, 28 , 21 , 37 , 45);
// console.log(createddate.toLocaleString());


let MyTimeStamp = Date.now();
// console.log(MyTimeStamp);
// console.log(Math.floor(MyTimeStamp/1000));

mydate.toLocaleString('default', {
    weekday: "long",

})