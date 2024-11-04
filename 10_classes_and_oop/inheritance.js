class parents{
    constructor(father, mother){
        this.father = father,
        this.mother = mother;
    }

    getParents(){
        console.log(this.father);
        console.log(this.mother);
        
        
    }
}

class child extends parents{
    constructor(name,age,gender){
        this.name = name,
        this.age = age,
        this.gender = gender
    }
    getChild(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
        
    }
}

const papa = new parents("chhagan", "teena")
papa.getParents()

const anil = new child("anil",19, "male")
anil.getChild();



