function multipleBy5 (num){
    return num*5
}

// console.log(multipleBy5(3));

multipleBy5.power = 2;


function details(product , price){
    this.product = product,
    this.price = price
    }


details.prototype.GetProduct = function(){
    console.log(`The Product is : ${this.product}`);
}

details.prototype.getPrice = function(){
    console.log(`The price is : ${this.price}`);   
}

details.prototype.getFullDetails = function(){
    console.log(`The Product is : ${this.product} and Price is : ${this.price}`);
    
}
const chai = new details("chai", 20)
const Tea = new details("Tea",70)

chai.getFullDetails()
Tea.getFullDetails()