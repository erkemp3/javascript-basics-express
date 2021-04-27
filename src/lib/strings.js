const sayHello = (a) => {
  return("Hello, " + a + "!");
};

const uppercase = (a) => {
  let str = a.toUpperCase();
  return str;
};

const lowercase = (a) => {
  let str = a.toLowerCase();
  return str;
};

const countCharacters = (a) => {
 let strLength = a.length;
 return strLength;
};

const firstCharacter = (a) => {
  let firstChar = a.charAt(0);
  return firstChar;
};

const firstCharacters = (a, b) => {
  let firstChars = a.substring(0 , b);
  return firstChars;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
