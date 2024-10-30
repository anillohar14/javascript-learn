// calling promise with resolve and putting in variable

const pormiseOne = new Promise(function(resolve, reject){
    resolve()
})
pormiseOne.then(function(){
    console.log("calling from .then");
    
})

//  calling promise with resove and without putting in variable

new Promise(function(resolve, reject){
    resolve();
}).then(function(){
    console.log("calling from .then without putting variable");
    
})

// consuming value useing promises

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : 'anil', userID : '@anil'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// consuming a targeted value using promises

const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
       if(!error){
        reslove({name : 'anil', age : 19})
       }
       else{
        reject("ERROR : SomeThing went wrong")
       }
    },1000)
})
promiseFour.then(function(user){
    return user.name
}).then(function(username){
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})

// Now we are consuming the pomise with async await method

const promiseFive = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            reslove({name : 'anil', age : 19})
           }
           else{
            reject("ERROR : JS went wrong")
           }
    },1000)
})

async function ConsumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }   
    }
    ConsumePromiseFive()

    async function GetAllUser (){
        try {
            const response = await fetch('https://api.github.com/users/hiteshchoudhary')
            const data = await response.json()
            console.log(data);
            
        } catch (error) {
            console.log("E:",error);
            
        }

      
    }

    GetAllUser();

    fetch('https://api.github.com/users/hiteshchoudhary').then(function(response){
        return response.json()
    }).then(function(data){
        return data.location
    }).then(function(location){
        console.log(location)
    })
    .catch(function(error){
        console.log(error);
    })