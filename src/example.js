const inquirer = require('inquirer');

const fs = require('fs');

inquirer.prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    
},
{   
    type: 'checkbox',
    name: 'languages',
    message:  'What languages do you know?',
    choices: ['html','css','javascrip','jquery','node','ABAP']


},
{
    type: 'list',
    name: 'communication',
    message: 'What is your preferred method of communication?',
    choices:['phone', 'email', 'mail', 'fax']
}

])
.then(function(answer){
    console.log(answer);
    const fileName = `${answer.name.toLowerCase().split(" ").join("")}.json`;
    fs.writeFile(fileName,JSON.stringify(answer, null, "\t"), (err)=>err? console.log(err): console.log('Success!')
    );
})

