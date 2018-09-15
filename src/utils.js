const getRandomNumber = () => Math.round(Math.random() * 100);

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const ascSort = arr => arr.sort((a, b) => a - b);

export {
  getRandomNumber,
  getRandomOperator,
  getGcd,
  ascSort,
};
