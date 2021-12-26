import userName from '../src/cli.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const rounds = 3;


const isEven = (number) => number % 2 === 0;
const engine = (task, gameCheck) => {
    console.log(task);
    for (let i = 1; i <= rounds; i += 1) {
        const [getQuestion, correctAnswer] = gameCheck();
        console.log(`Question: ${getQuestion}`);
        const answer = readlineSync.question('Your answer:');

        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

const gamesCheck = () => {
    const question = ${randomNumber};
    const randomNumber = Math.round(Math.random() * 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
}

const startEvenGame = () => engine(task, gameCheck);
export default startEvenGame;