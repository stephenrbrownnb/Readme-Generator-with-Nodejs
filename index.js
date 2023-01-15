// packages required for the program
const inquirer = require(`inquirer`);
const fs = require(`fs`);
// Template of Readme 
const generateReadme = ({projectName, projectDesc, projectInstall, projectGithub, projectCommand, projectAssist, projectAuthor}) =>
`
# ${projectName} 

## Description

${projectDesc}



## Installation Instructions 
Command(s) to install required files for program is: ${projectInstall}

##Usage Instructions
Command(s) to run the program is: ${projectCommand} video with instructions can be found 
at https://drive.google.com/file/d/1rNAfQY1yYPhlgLCjBwO07DVnfmgpl5XX/view?usp=sharing

##Credit 
This project was created by ${projectAuthor}, Github id: ${authorGithub} and email address: ${authorEmail} and assisted by ${projectAssist}

## License
Copyright (c) [2022] [Stephen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


`;

// Questions to populate Readme

inquirer
.prompt([
{
    type: 'input',
    name: 'projectName',
    message:'What is the name of the project?',
},
{
    type: 'input',
    name: 'projectDesc',
    message:'Write a brief descritption about the project',
},
{
    type: 'input',
    name: 'projectInstall',
    message:'Command(s) to install project',
},
{
    type: 'input',
    name: 'projectCommand',
    message:'Command(s) to run the project',
},
{
    type: 'input',
    name: 'projectAuthor',
    message:'Who wrote the project code?',
},
{
    type: 'input',
    name: 'authorGithub',
    message:'What is your github Id',
},
{
    type: 'input',
    name: 'emailAddress',
    message:'What is your email address',
},
{
    type: 'input',
    name: 'projectAssist',
    message:'Who assisted writing the project code?',
},
])
.then ((answers) => {
    const readmeContent = generateReadme(answers);
fs.writeFile('README.md',readmeContent, (err) =>
err ? console.log('Ooops something went wrong, Please try again') : console.log('Successfully created Readme') );
});
