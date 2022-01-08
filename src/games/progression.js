import engine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgression = (number, difference) => {
  const array = [number];
  for (let i = 0; i <= 9; i += 1) {
    if (array.length === 10) {
      return array;
    } else {
      const nextNumber = number + difference;
      number = nextNumber;
      array.push(nextNumber);
    }
  }
  return array;
};

const gameCheck = () => {
  const number = Math.round(Math.random() * 100);
  const difference = Math.round(Math.random() * 10);

  const progress = arithmeticProgression(number, difference);
  progress[number] = '..';
  const question = `${progress.join('..')}`;
  const correctAnswer = progress[number];
  return [question, correctAnswer];
};
const progression = () => engine(gameRules, gameCheck);

export default progression;
