import makeGame from '../games-engine';
import { getRandomNumber, getRandomOperator } from '../utils';

const rules = 'What is the result of the expression?';

const getGameSet = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const operator = getRandomOperator();
  const operations = {
    '-': x - y,
    '+': x + y,
    '*': x * y,
  };

  return {
    question: `${x} ${operator} ${y}`,
    answer: operations[operator].toString(),
  };
};

const calculate = () => makeGame(rules, getGameSet);

export default calculate;
