const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = (array) => {
  return (array.toString());
};

const csvStringToArray = (string) => {
  return (string.split(","));
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
 return(array.concat(element));

};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.toString().split(",");
};

const uppercaseWordsInArray = strings => {
  const uppercased = strings.map(string => string.toUpperCase());
  return uppercased; 
};

const reverseWordsInArray = strings => {
  const reversed = strings.map(string => string.split("").reverse().join(""));
  return reversed;
};

const onlyEven = numbers => {
  const evens = [];
  for (let i=0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
  evens.push(numbers[i]);
  }
  }
  return evens
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
};


const removeSpaces = (string) => {
  const removed = string.split(" ").join("");
  return removed
};

const sumNumbers = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
return sum
};

const sortByLastLetter = strings => {
  
function endComparator(a,b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
}
return strings.sort(endComparator);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
