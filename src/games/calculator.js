import engine from '../index.js';

const gameRules = 'What is the result of the expression?';

const equation = (num1, operator, num2) => {
  console.log(operator);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

const getRandomInt = (min, max) => {
  const random = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return random;
};

const gameCheck = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomInt(0, operations.length)];
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = `${number1} ${randomOperation} ${number2}`;
  const correctAnswer = `${equation(number1, randomOperation, number2)}`;
  return [question, correctAnswer];
};
console.log(gameCheck());
const calculator = () => engine(gameRules, gameCheck);

export default calculator;
