const facebook = {}
    facebook.id = "ashwin14lohar@gmail.com",
    facebook.userName = "ashwin lohar",
    facebook.loggedIn = true

    // console.log(facebook);
    // console.log(facebook.loggedIn);

    // now below code is about nested objects

    const instagram = {
       user : "ashwin lohar",
       loggedIn : false,
       gmail : "ashwin14lohar@gmail.com",
       location : {
            state : {
                state : "maharashtra",
                city : {
                    city : "Mumbai"
                }
            }
       }

    }

    // console.log(instagram.location.state.city.city);


    //  learn about to merge multiple objects
    
    const obj1 ={1 : "a", 2 :"b"}
    const obj2 ={3 : "a", 4 :"b"}
    const obj3 ={5 : "a", 6 :"b"}

    // there are many ways to merge multipal objects

    // type 1 
    const obj4 = {obj1, obj2} // this method create a new object and store in like nested object
    // console.log(`method no. 1 : `,console.log(obj4));
    // console.log();

    // type 2
    const obj5 = Object.assign({}, obj1, obj2, obj3);
    // console.log(`method no. 2 : ${console.log(obj5)}`); // this method is good but not that much prefered in industry
    // console.log();

    // type 3
    const obj6 = {...obj1, ...obj2, ...obj3};
    // console.log(`method no. 3 : ${console.log(obj5)}`); // this method is most prefered in industry


    // now object can be stored in array as well 

    const user = [
        {
            id : 1,
            user_ID : "324ffkwfhr239"
        },
        {
            id : 1,
            user_ID : "324ffkwfhr239"
        },
        {
            id : 1,
            user_ID : "324ffkwfhr239"
        }

    ]

    // console.log(user[1]);

    // now finding values, keys and entries in oblects by using its functions

    console.log(`Printing the values of facebook object : ${Object.values(facebook)}`);
    console.log(`Printing the keys of facebook object : ${Object.keys(facebook)}`);
    console.log(`Printing the entries of facebook object : ${Object.entries(facebook)}`);