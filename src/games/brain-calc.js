import game from '../games-engine';
import { getRandomExpression } from '../utils';

const RULES = 'What is the result of the expression?\n';

const getCorrectAnswer = (expr) => {
  const operations = {
    '-': (x, y) => x - y,
    '+': (x, y) => +x + +y,
    '*': (x, y) => x * y,
  };
  const exprParts = expr.split(' ');
  return operations[exprParts[1]](exprParts[0], exprParts[2]).toString();
};

const getGameExpression = () => getRandomExpression();

const calculate = () => game(RULES, getGameExpression, getCorrectAnswer);

export default calculate;
