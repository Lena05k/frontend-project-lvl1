const getRandomInt = (min, max) => {
  const random = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
  return random;
};

export default getRandomInt;
