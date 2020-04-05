const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require("./lib/htmlRenderer");

function createTeam() {
    // welcome message
    console.log('Welcome. Let\'s start!');

    // prompt the user for their role
    inquirer.prompt(employeeQuestion).then( ({role}) => {
        if (role === 'Manager') {
            console.log(`You're a ${role}, you may now create your team.`);
        }
        else {
            console.log(`You're an ${role}, you don't have the authorization to create a team.`);
        }
    })

}


// questions
const employeeQuestion = [
    {
        type: 'list',
        name: 'role',
        message: 'What is your role in the company?',
        choices: ['Engineer', 'Intern', 'Manager']
    }
]

createTeam();