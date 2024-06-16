#! /usr/bin/env node

import inquirer from "inquirer"
class Person{
    name:string 

    constructor(Pname:string){
        this.name = Pname
    }
}

class Student extends Person {
    personality:string = "mystery"

    constructor(Sname:string ){
        super(Sname)
        
    }

addpersonality(StudentPersonality:string){
    this.personality = StudentPersonality

    
if (user.input2 === 1){
this.personality = "Extrovert"
}
else if (user.input2 === 2){
    this.personality = "Introvert"
}
else{
    this.personality = "Mystery"
}
}

}


let user = await inquirer.prompt(
    [
        {
            name:"name",
            message:"Enter Student Name = ",
            type:"input",
        },

        {
            name:"input2",
            message:"Enter 1 if u like to talk to others, Enter 2 if u would rather keep to yourself = ",
            type:"number",
            
        }
    ]
)

let a = new Student(user.name)

a.addpersonality(user.input2)

console.log(a)


