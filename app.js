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
                createMember();
            })
        }
        else {
            console.log(`You're an ${role}, you don't have the authorization to create a team. \nProgram Ending!`);
        }
    })
}

// creating instances of members
function createMember() {
    inquirer.prompt(optionsPrompt).then( ({option}) => {
        if (option === 'Engineer') {
            inquirer.prompt(engineerPrompt).then( ({name, email, github}) => {
                teamMembers.push(new Engineer(name, teamMembers.length, email, github));
                createMember();
            });
        }
        else if (option === 'Intern') {
            inquirer.prompt(internPrompt).then( ({name, email, school}) => {
                teamMembers.push(new Intern(name, teamMembers.length, email, school));
                createMember();
            })
        }
        else {
            console.log("Nothing");
        }
    })
}

// render team's HTML
function renderHTML(array) {
    let teamHTML = render(array);
    fs.writeFile(outputPath, teamHTML, (error) => console.log(error)); 
}

// prompts
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
        name: 'option',
        message: 'What role do you want to create?',
        choices: ['Engineer', 'Intern', new inquirer.Separator(), 'End Prompt. Create HTML']
    }
]

createTeam();