const inquirer = require('inquirer');
const fs = require('fs')


// Array of objects hording questions
const questions =[
  {
    type: 'input',
    name: `title`,
    message: 'What is the name of website/application?'
  },
  {
    type: 'input',
    name: 'description',
    message: `Please put a description of your website/application.`
  },
  {
    type: 'input',
    name: 'installation',
    message: `What are the steps to installing your website/application?`
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information.',
  },
  {
    type: 'input',
    name: 'contribute',
    message: `How can others contribute to your application?`
  },
  {
    type: 'input',
    name: 'tests',
    message: `Want test can be ran for your website/application?`
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Enter usage information.',
    choices: [
      'MIT', 'GPLv3', 'Apache', 'Unlicense', 'BSD'
    ]
  },
  {
    type: 'input',
    name: 'GitHubName',
    message: `What is your GitHub username?`
  },
  {
    type: 'input',
    name: 'GitHubURL',
    message: `What is the URL to your GitHub profile?`
  },
  {
    type: 'input',
    name: 'email',
    message: `What is your email address?`
  }
]

inquirer
.prompt(questions)
.then(answers => {
const README = markDown(answers);
fs.writeFile(`README-test.md`, README, err => {
  if (err) throw err;
  console.log(`README.md complete!`)
})
})

// Function for adding the answers from the object questions to the README
function markDown(answers){
return `
#${answers.title}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
The license used for this application was the ${answers.license} License.

## Contributing
${answers.contribute}

## Tests
${answers.tests}

## Questions
if you have any questions or need more information email me at ${answers.email}. You can also reach me at GitHub (https://github.com/${answers.GitHubURL}) 
`
}