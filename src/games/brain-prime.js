import makeGame from '../games-engine';
import { getRandomNumber } from '../utils';

const rules = 'Is this number prime? Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  const stopPoint = Math.floor(Math.sqrt(num));

  const iter = (devider) => {
    if (num % devider === 0) {
      return false;
    }
    if (devider > stopPoint) {
      return true;
    }
    return iter(devider + 1);
  };
  return iter(2);
};

const getGameSet = () => {
  const number = getRandomNumber();
  return {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

const findPrime = () => makeGame(rules, getGameSet);

export default findPrime;
