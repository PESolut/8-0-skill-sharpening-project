/**
 * isEqual()
 * ---------------------
 * Takes in two values and returns if they are strictly equal or not
 * HINT: The prompt says STRICTLY equal. What does that mean in JavaScript?
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isEqual(10, 10);
 *  //> true
 *
 *  isEqual(10, "10");
 *  //> false
 */
function isEqual(a, b) {
  if (a === b){
    return true 
  } else {
    return false 
  }
}

/**
 * findLarger()
 * ---------------------
 * Takes in two numbers and returns the larger number. The numbers are guaranteed to be unique (not equal to each other).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  findLarger(19, 7);
 *  //> 19
 */
function findLarger(a, b) {
// let number1
// let number2 ( wanted to be creative :D , was gonna use if)
// checks the numbers with tenary operator
let larger
larger = ((a > b) ? a : b)
return larger
}


/**
 * findLargerOrTie()
 * ---------------------
 * Takes in two numbers and returns the larger number. Returns the string "tie" if both numbers are the same.
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 *
 * EXAMPLE:
 *  findLargerOrTie(0, 1);
 *  //> 1
 *
 *  findLargerOrTie(0, 0);
 *  //> "tie"
 */
function findLargerOrTie(a, b) {
  let larger
  larger = ((a > b) ? a : b)
  if((a === b)){
  return 'tie'
  }
  return larger
}

/**
 * positiveNegativeOrZero()
 * ---------------------
 * Takes in a number and returns whether that number is "Positive", "Negative", or "Zero".
 * HINT: Capitalization and spelling count!
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  positiveNegativeOrZero(-1);
 *  //> "Negative"
 *
 *  positiveNegativeOrZero(0);
 *  //> "Zero"
 *
 *  positiveNegativeOrZero(1);
 *  //> "Positive"
 */
function positiveNegativeOrZero(a) {
  let number = null
  if (a > 0){
    number = 'Positive'
    return number
  } else if (a < 0){
    number = 'Negative'
    return number
  } else {
    number = 'Zero'
    return number
  }
  //is postiive
  // didnt work... asking on stacks overflow. and using what i know; if statement.
  // let ourNumber = a
  // switch (a) {
  //   case (a > 0):
  //     ourNumber = ('Positive') // different syntax then if; no kurlys. why ?
  //     return ourNumber
  //     case (a < 0):
  //       ourNumber = ('Negative')
  //       return ourNumber
  //     // case (a === 0):
  //     //   ourNumber = ('Zero')
  //     //   break;
  //     default:
  //       ourNumber = ('Zero')
  //   }
  // return 'Postive'
  // return 'Negative'
  // return 'Zero'
  return ourNumber
}

/**
 * aroundTheWorldGreeting()
 * ---------------------
 * Takes in a `language` (e.g "english", "spanish", or "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: english -> "Hello World"
 *               spanish -> "Hola Mundo"
 *               german  -> "Hallo Welt"
 * HINT: The function expects lowercase names of languages.
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreeting("spanish");
 *  //> "Hola Mundo"
 *
 *  aroundTheWorldGreeting();
 *  //> "Hello World"
 */
function aroundTheWorldGreeting(language) {
  let defaultReturn = 'Hello World'
  let germanReturn = 'Hallo Welt'
  let spanishReturn = 'Hola Mundo'
  let eng = null
  eng = ('english')
  let spa = null
  spa = 'spanish'
  let ger = null
  ger = 'german'
  if (language === eng){
    return defaultReturn
  } else if (language === spa){
    return spanishReturn
  } else if (language === ger){
    return germanReturn
  } else {
    return defaultReturn
  }

}

/**
 * aroundTheWorldGreetingWithSwitch()
 * ---------------------
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German  -> "Hallo Welt"
 *
 * NOTE: You must use a `switch` statement in solving this.
 *
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreetingWithSwitch("german");
 *  //> "Hallo Welt"
 *
 *  aroundTheWorldGreetingWithSwitch();
 *  //> "Hello World"
 */
function aroundTheWorldGreetingWithSwitch(language) {
  let defaultReturn = null
  let germanReturn = null
  let spanishReturn = null
   defaultReturn = 'Hello World'
   germanReturn = 'Hallo Welt'
   spanishReturn = 'Hola Mundo'
  let eng = null
  eng = 'english'
  let spa = null
  spa = 'spanish'
  let ger = null
  ger = 'german'
}

/**
 * calculateLetterGrade()
 * ---------------------
 * Takes in a number and returns the letter grade corresponding to that number. Letter grades consist of "A", "B", "C", "D", or "F".
 *
 * SCORING: 90 and above is an A
 *          80 and above is a B
 *          70 and above is a C
 *          60 and above is a D
 *          Anything lower than 60 is an F
 * @param {number} grade
 * @returns {string}
 *
 * EXAMPLE:
 *  calculateLetterGrade(99);
 *  //> "A"
 */
function calculateLetterGrade(grade) {
  if (grade >= 90){
    let letterGrade = 'A'
    return letterGrade
  } else if(grade >= 80){
    let letterGrade = 'B'
    return letterGrade
  } else if (grade >= 70){
    let letterGrade = 'C'
    return letterGrade
  } else if (grade >= 60){
    let letterGrade = 'D'
    return letterGrade
  } else {
    let letterGrade = 'F'
    return letterGrade
  }
}

/**
 * animalCounts()
 * ---------------------
 * Returns the count of animals, properly pluralizing the animal if there is more than one.
 * The animal is guaranteed to be one you can pluralize by adding `s`. (NO geese, fish, deer, oxen, etc.)
 * @param {string} animal
 * @param {number} numberOfAnimals
 * @returns {string}
 *
 * EXAMPLE:
 *  animalCounts("dog", 2);
 *  //> "2 dogs"
 *
 *  animalCounts("pig", 1);
 *  //> "1 pig"
 */
function animalCounts(animal, numberOfAnimals) {
  if (numberOfAnimals === 1){
    output =`1 ${animal}`
    return output
  } else if (numberOfAnimals > 1){
    output = `${numberOfAnimals} ${animal}s`
    return output
  }

}

/**
 * evenOrOdd()
 * ---------------------
 * Takes in a number and returns whether that number is "Even" or "Odd".
 * HINT: How is this similar to isOdd() or isEven() from part 2?
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOdd(11);
 *  //> "Odd"
 * 
 *  evenOrOdd(48);
 *  //> "Even"
 */
function evenOrOdd(a) {
  if ((a % 2) === 0){ //even
    return 'Even'
  } else {
    return 'Odd'
  }
}

/**
 * evenOrOddWithTernary()
 * ---------------------
 * Takes in a number and returns whether that number is even or odd.
 *
 * NOTE: You must use a ternary to solve this.
 *
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOddWithTernary(8);
 *  //> "Even"
 */
function evenOrOddWithTernary(a) {
  return (a % 2 === 0 ? 'Even' : 'Odd');
}

// Do not change any code below this line.
module.exports = {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
};
