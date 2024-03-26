#!/usr/bin/env node

import inquirer from "inquirer";
console.log("            Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1); //computer genrated number
// for user guide
const answers = await inquirer.prompt([{
        name: "UserGuessNumber",
        type: "number",
        message: "please guess a number between  1 - 6:",
    },
]);
console.log(answers); // print user answers
//for correct or wrong answer 
if (answers.UserGuessNumber === randomNumber) {
    console.log("Execellent! You guess correct number");
}
else {
    console.log("oopps! you are wrong");
}
