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

class anil{
    constructor(name){
        this.name = name
    }
}

class child extends anil{
    constructor(name,age,gender){
        super(name)
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
// papa.getParents()

const child_1 = new child("anil",19, "male")
child_1.getChild()


