import engine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgression = (number, difference) => {
  const array = [];
  let sum = number;
  for (let i = 0; i < 10; i += 1) {
    sum += difference;
    array.push(sum);
  }
  return array;
};

const gameCheck = () => {
  const number = Math.round(Math.random() * 10);
  const difference = Math.round(Math.random() * 10);

  const progress = arithmeticProgression(number, difference);
  const correctAnswer = `${progress[number]}`;
  progress[number] = '..';
  const question = progress.join(' ');
  return [question, correctAnswer];
};
const progression = () => engine(gameRules, gameCheck);

export default progression;
