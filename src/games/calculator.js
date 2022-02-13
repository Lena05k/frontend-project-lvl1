import engine from '../index.js';

const gameRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const equation = (num1, operator, num2) => {
  let result;
  if (operator === '+') {
    result = (num1 + num2);
  } else if (operator === '-') {
    result = (num1 - num2);
  } else if (operator === '*') {
    result = (num1 * num2);
  } else if (operator === undefined) {
    throw new Error('Unsupported operator');
  }
  return result;
};

const gameCheck = () => {
  const number1 = Math.round(Math.random() * 10);
  const number2 = Math.round(Math.random() * 10);
  const randomOperation = operations[Math.round(Math.random() * operations.length)];
  console.log(randomOperation);
  const question = `${number1}${randomOperation}${number2}`;
  const correctAnswer = `${equation(number1, randomOperation, number2)}`;
  return [question, correctAnswer];
};
console.log(gameCheck());
const calculator = () => engine(gameRules, gameCheck);

export default calculator;
