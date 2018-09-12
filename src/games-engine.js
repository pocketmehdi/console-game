import readlineSync from 'readline-sync';
import getUserName from './index';

const GENERAL_GREATING = 'Welcome to the Brain Games!';

const game = (rules, getGameExpression, getCorrectAnswer) => {
  console.log(GENERAL_GREATING);
  console.log(rules);
  const userName = getUserName();

  const singleRound = (stepNumber) => {
    if (stepNumber > 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const gameExpression = getGameExpression();
    const correctAnswer = getCorrectAnswer(gameExpression);
    const answer = readlineSync.question(`Question: ${gameExpression} \nYour answer: `);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      singleRound(stepNumber + 1);
    }
  };

  singleRound(1);
};

export default game;
