import makeGame from '../games-engine';
import { getRandomNumber, getGcd } from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const getGameSet = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const answer = x > y ? getGcd(x, y) : getGcd(y, x);

  return {
    question: `${x} ${y}`,
    answer: answer.toString(),
  };
};

const findGcd = () => makeGame(rules, getGameSet);

export default findGcd;
