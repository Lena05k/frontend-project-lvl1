import engine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What is the result of the expression?';

const equation = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getData = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomInt(0, operations.length - 1)];
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = `${number1} ${randomOperation} ${number2}`;
  const correctAnswer = `${equation(number1, randomOperation, number2)}`;
  return [question, correctAnswer];
};

const calculator = () => engine(gameRules, getData);

export default calculator;
