import engine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m !== 0) {
    return gcd(m, n % m);
  }
  return n;
};

const getDate = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${gcd(num1, num2)}`;
  return [question, correctAnswer];
};

export default () => engine(gameRules, getDate);
