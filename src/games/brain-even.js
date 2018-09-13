import makeGame from '../games-engine';
import { getRandomNumber } from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const getGameSet = () => {
  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return { question, answer };
};

const isEven = () => makeGame(rules, getGameSet);

export default isEven;
