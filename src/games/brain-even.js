import game from '../games-engine';
import { getRandomNumber } from '../utils';

const RULES = 'Answer "yes" if number even otherwise answer "no".\n';

const getCorrectAnswer = (number) => {
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return answer;
};

const getGameExpression = () => getRandomNumber();

const isEven = () => game(RULES, getGameExpression, getCorrectAnswer);

export default isEven;
