/*var message = 'Hello Node! ';

var sum = 5 + 3;

console.log(message);
console.log(sum);

var commandLineArgs = process.argv;
console.log(commandLineArgs);*/
// const addNums = (numOne, numTwo) => numOne + numTwo;

// const sum = addNums(5, 3);

// console.log(sum);

//console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = (profileDataArr) => {
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     profileDataArgs.forEach((profileItem) => {
//         console.log(profileItem);
//     });

//     console.log('================');
//     //clean
//     profileDataArgs.forEach(profileItem =>  console.log(profileItem));
// };

// printProfileData(profileDataArgs);


// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
//assignment destructuring.
// const fs = require('fs');

// //const profileDataArgs = process.argv.slice(2, process.argv.length);

// const[name, github] = profileDataArgs;

// const generatePage = require('./src/paage-template');
// // console.log(name, github);
// // console.log(generatePage(name, github));

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if(err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// })

// const inquirer = require('inquirer');
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         }
//     ])
//     .then(answers => console.log(answers))
const inquirer = require('inquirer');
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
    ]);
  };
  
  promptUser().then(answers => console.log(answers));