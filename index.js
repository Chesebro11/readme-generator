// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectname',
            message: 'What is the name of your project?',
            validate: projectnameInput => {
                if (projectnameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'projectdescription',
            message: 'Please describe your project',
            validate: projectdescriptionInput => {
                if (projectdescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirminstall',
            message: 'Does your project require installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide detailed installation instructions',
            when: ({ confirminstall }) => confirminstall
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and example for use. If you wish to add screenshots add them to ./assets/images',
        },
        {
            type: 'confirm',
            name: 'confirmcontribution',
            message: 'Do you have guidelines for users who wish to contribute to your project?',
            defualt: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your guidlines for contribution',
            when: ({ confirmcontribution }) => confirmcontribution
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: 'What did you create this project with? (Check all that apply)',
            choices: ['javascript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node', 'JSON', 'React', 'Rust', 'C#', 'Azure']
        },
        {
            type: 'input',
            name: 'githubname',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
}

// need to pass questions to an argument which will then be passed to a function to log to test questions
// need another function that will pass the data to a function to then pass to another file that actually writes the readme
questions()
    .then((readmeInput) => {
        console.log(readmeInput);
        return fs.writeFileSync('./readme.md', generateMarkdown.generateMarkdown(readmeInput));
    })
    .catch((err) => {
        if (err) {
            throw err;
        }
    });

// TODO: Create a function to write README file
function writeToFile(fileName, readmeInput) {
    console.log(fileName, readmeInput);
    return fs.writeFileSync(path.join(process.cwd(), fileName), readmeInput);
}

// TODO: Create a function to initialize app

// Function call to initialize app





// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README