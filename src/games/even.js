import engine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameCheck = () => {
  const number = Math.round(Math.random() * 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const checkEven = () => engine(gameRules, gameCheck);

export default checkEven;
