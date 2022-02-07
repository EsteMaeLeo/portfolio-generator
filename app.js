/*var message = 'Hello Node! ';

var sum = 5 + 3;

console.log(message);
console.log(sum);

var commandLineArgs = process.argv;
console.log(commandLineArgs);*/
// const addNums = (numOne, numTwo) => numOne + numTwo;

// const sum = addNums(5, 3);

// console.log(sum);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = (profileDataArr) => {
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    profileDataArgs.forEach((profileItem) => {
        console.log(profileItem);
    });

    console.log('================');
    //clean
    profileDataArgs.forEach(profileItem =>  console.log(profileItem));
};

printProfileData(profileDataArgs);
