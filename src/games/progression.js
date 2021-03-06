import engine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgression = (getNumber, difference) => {
  const array = [];
  let sum = getNumber;
  for (let i = 0; i < 10; i += 1) {
    sum += difference;
    array.push(sum);
  }
  return array;
};

const getData = () => {
  const startProgression = getRandomInt(1, 10);
  const difference = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 10);
  const index = getRandomInt(0, progressionLength);
  const progression = arithmeticProgression(startProgression, difference);
  const correctAnswer = `${progression[index]}`;
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => engine(gameRules, getData);
