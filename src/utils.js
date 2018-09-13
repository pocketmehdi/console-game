const getRandomNumber = () => Math.round(Math.random() * 100);
const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

export { getRandomNumber, getRandomOperator };
