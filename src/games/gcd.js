import engine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (b !== 0) {
    const n = a % b;
    return nod(a, n);
  }
  return a;
};

const gameCheck = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${nod(num1, num2)}`;
  return [question, correctAnswer];
};

const gcd = () => engine(gameRules, gameCheck);

export default gcd;
