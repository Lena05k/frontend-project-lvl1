import engine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const findPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  if (number < 2) {
    return false;
  }
  return true;
};

const gameCheck = () => {
  const number = Math.round(Math.random() * 10);
  const question = `${number}`;
  const correctAnswer = findPrimeNumber(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const prime = () => engine(gameRules, gameCheck);

export default prime;
