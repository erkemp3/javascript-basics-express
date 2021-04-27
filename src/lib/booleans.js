const negate = a => {
  return !(a);
};

const both = (a, b) => {
  if (a === true && b === true) { 
  return true;}
  else {return false;}
};

const either = (a, b) => {
  if (a === true || b === true) {
  return true;}
  else {return false;}
};

const none = (a, b) => {
  if (a === true || b === true) {
  return false;}
  else {return true;}
};

const one = (a, b) => {
  if (a === true && b === true) {
  return false;}
  else if (a === false && b === false) {
  return false;}
  else {return true;}
};

const truthiness = a => {
  if (a) {return true;}
  else {return false;}
};

const isEqual = (a, b) => {
  if (a === b) {return true;}
  else {return false;}
};

const isGreaterThan = (a, b) => {
  if (a > b) {return true;}
  else {return false;}
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {return true;}
  else {return false;}
};

const isOdd = a => {
  let rem = a % 2
  if (rem > 0) {return true;}
  else {return false;}
};

const isEven = a => {
  let rem = a % 2
  if (rem === 0) {return true;}
  else {return false;}
};

const isSquare = a => {
  if (a >= 0 && Math.sqrt(a)% 1 === 0) {return true;}
  else {return false;}
};

const startsWith = (a, b) => {
  if (a === b.charAt(0)) {return true;}
  else {return false;}
};

const containsVowels = (string) => {
let lcString = string.toLowerCase()
  if (lcString.includes("a") === true || lcString.includes("e") === true || lcString.includes("i") === true || lcString.includes("o") === true || lcString.includes("u") === true) {return true;}
  else {return false;}
};

const isLowerCase = a => {
  if (a === a.toLowerCase()) {return true;}
  else {return false;}
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
