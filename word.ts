import inquirer from "inquirer";
let wordans:{
    sentence:string
}=await inquirer.prompt(
[
    {
        name:"armeen",
        message:"enter your sentence to count the words: ",
        type:"input",
    }
]
)
let words=wordans.sentence.trim().split(" ")
console.log(words)
console.log("your sentence count word is: " , (words.length))