import engine from '../index.js';

const gameRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const equation = (num1, operator, num2) => {
  switch (operator) {
    case ('+'): return num1 + num2;
    case ('-'): return num1 - num2;
    case ('*'): return num1 - num2;
    default: return null;
  }
};

const gameCheck = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const randomOperation = operations[Math.round(Math.random() * operations.length)];
  const question = `${num1}${randomOperation}${num2}`;
  const correctAnswer = `${equation(num1, randomOperation, num2)}`;
  return [question, correctAnswer];
};

const calculator = () => engine(gameRules, gameCheck);

export default calculator;
