import engine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  const sqrt = Math.sqrt(number);
  for (let i = 2; i < sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const number = getRandomInt(1, 10);
  const question = `${number}`;
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const prime = () => engine(gameRules, getData);

export default prime;
