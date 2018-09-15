import makeGame from '../games-engine';
import { getRandomNumber, ascSort } from '../utils';

const rules = 'Balance the given number.';

const balance = (arr) => {
  const lastIndx = arr.length - 1;
  if ((arr[lastIndx] - arr[0]) <= 1) {
    return arr;
  }
  const newArr = ascSort([arr[0] + 1, ...arr.slice(1, lastIndx), arr[lastIndx] - 1]);
  return balance(newArr);
};

const getBalancedNum = (num) => {
  const digits = num.toString().split('').map(i => Number(i));
  const ascDigits = ascSort(digits);
  return (balance(ascDigits)).join('');
};

const getGameSet = () => {
  const num = getRandomNumber();

  return {
    question: num,
    answer: getBalancedNum(num),
  };
};

const balanceNumber = () => makeGame(rules, getGameSet);

export default balanceNumber;
