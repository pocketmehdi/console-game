import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getRandomNumber = () => Math.round(Math.random() * 100);
const getCorrectAnswer = (number) => {
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return answer;
};

const evenGame = () => {
  const userName = getUserName();

  const singleRound = (stepNumber) => {
    if (stepNumber > 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const randomNumber = getRandomNumber();
    const correctAnswer = getCorrectAnswer(randomNumber);
    const answer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      singleRound(stepNumber + 1);
    }
  };

  singleRound(1);
};

export { getUserName, evenGame };
