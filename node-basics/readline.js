const readline = require('readline');
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

rl.question(`Whats is ${num1} + ${num2}? \n`, userInput => {
  const userInputNumber = Number(userInput.trim());
  if (userInputNumber === answer) {
    rl.close();
  } else {
    rl.setPrompt('Incorrect response, please try again \n');
    rl.prompt();
    rl.on('line', anotherUserInput => {
      const anotherUserInputNumber =
        Number(anotherUserInput.trim()) || anotherUserInput;
      if (anotherUserInputNumber === answer) {
        rl.close();
      } else {
        rl.setPrompt(
          `Your answer of ${anotherUserInputNumber} is incorrect, try again \n`
        );
        rl.prompt();
      }
    });
  }
});

rl.on('close', () => {
  console.log('Correct!');
});
