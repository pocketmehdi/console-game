import readlineSync from 'readline-sync';
import getUserName from './index';

const generalGreating = 'Welcome to the Brain Games!';

const makeGame = (rules, getGameSet) => {
  console.log(generalGreating);
  console.log(`${rules}\n`);
  const userName = getUserName();

  const singleRound = (stepNumber) => {
    if (stepNumber > 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { question, answer } = getGameSet();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}' \nLet's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      singleRound(stepNumber + 1);
    }
  };

  singleRound(1);
};

export default makeGame;
