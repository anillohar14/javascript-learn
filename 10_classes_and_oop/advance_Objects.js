const chai = {
    name: "Masala Chai",
    price: 30,
    Available: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    enumerable: false
})

for (let [key, value]  of Object.entries(chai)) {
    if(typeof value !=="function"){
        console.log(`${key} : ${value}`);
        
    }
}