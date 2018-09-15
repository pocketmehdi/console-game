import makeGame from '../games-engine';
import { getRandomNumber, getRndArrIndex } from '../utils';

const rules = 'What number is missing in this progression?';
const prgLength = 10;

const buildPrgColl = (start, diff, length) => {
  const iter = (coll) => {
    const cLength = coll.length;
    if (cLength === length) {
      return coll;
    }
    const newColl = [...coll, coll[cLength - 1] + diff];
    return iter(newColl);
  };

  return iter(start);
};


const getGameSet = () => {
  const prgStart = getRandomNumber();
  const prgDiff = getRandomNumber();
  const rndIndex = getRndArrIndex(prgLength);

  const prgColl = buildPrgColl([prgStart], prgDiff, prgLength);
  const rndEl = prgColl[rndIndex];
  const collWithEmptyEl = [...prgColl.slice(0, rndIndex), '..', ...prgColl.slice(rndIndex + 1, prgColl.length)];

  return {
    question: collWithEmptyEl.join(' '),
    answer: rndEl.toString(),
  };
};

const fillProgression = () => makeGame(rules, getGameSet);

export default fillProgression;
