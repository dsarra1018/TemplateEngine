const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require("./lib/htmlRenderer");

// an array that holds team members
const teamMembers = []

// initializes the creation of team
function createTeam() {
    // welcome message
    console.log('Welcome. Let\'s start!');

    // prompt the user for their role
    inquirer.prompt(employeePrompt).then( ({role}) => {
        if (role === 'Manager') {
            console.log(`You're a ${role}, you may now create your team.`);
            inquirer.prompt(managerPrompt).then( ({name, email, officeNumber}) => {
                teamMembers.push(new Manager(name, teamMembers.length, email, officeNumber))
            })
        }
        else {
            console.log(`You're an ${role}, you don't have the authorization to create a team. \nGood-bye!`);
        }
    })
}

// prompt
const employeePrompt = [
    {
        type: 'list',
        name: 'role',
        message: 'What is your role in the company?',
        choices: ['Engineer', 'Intern', 'Manager']
    }
]

const engineerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github account: '
    }
]

const internPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email: '
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter school name: '
    }
]

const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address: '
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number: '
    }
]

const optionsPrompt = [
    {
        type: 'list',
        name: 'role',
        message: 'What role do you want to create?',
        choices: ['Engineer', 'Intern', new inquirer.Separator(), 'End Program']
    }
]




createTeam();