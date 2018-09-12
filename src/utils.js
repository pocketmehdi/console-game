const getRandomNumber = () => Math.round(Math.random() * 100);
const getRandomExpression = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const operators = ['-', '+', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return `${x} ${operators[randomIndex]} ${y}`;
};

export { getRandomNumber, getRandomExpression };
