const square = function(x) {
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x * x;

const getFirstName = (firstName) => firstName.split(" ")[0];

const getName = (firstName) => {
  return firstName.split(' ')[0];
};

console.log(getFirstName('Mick Jagger'));
console.log(getName('Mick Jagger'));
console.log(square(8));
console.log(squareArrow(8));