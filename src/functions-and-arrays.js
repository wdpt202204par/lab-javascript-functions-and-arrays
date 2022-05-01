// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  let max;

  if (number1 > number2) {
    max = number1;
  } else if (number1 <= number2) {
    max = number2;
  }

  return max;
}

// Iteration #2: Find longest word

/* @Wilson : Le tableau "words" ci-dessous est de taille 7 (car il contient 7 éléments) : words.length === 7.
 * Sa dernière position (son dernier "index"), cependant, est la 6ème :
 *
 * Positions :     0          1          2           3          4         5           6 = words.length - 1         */
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArray) {
/* 
 * @Wilson : la fonction findLongestWord parcours le tableau "wordsArray" de gauche à droite avec une boucle "for"
 * (wordsArray[0], wordsArray[1], wordsArray[2], etc., jusqu'à wordsArray[wordsArray.length - 1]).
 * 
 * -> la dernière position est "wordsArray.length - 1" (cf. exemple ci-dessus).
 *
 * Pour chaque mot wordsArray[i] (avec i allant de 0 à wordsArray.length - 1), la fonction compare la longueur du mot
 * à la valeur "max".
 * Si la longueur du mot est plus grande que "max", alors elle devient le nouveau "max" :
 * 
 * if (wordsArray[i].length > max) {
 *    max         = wordsArray[i].length;
 * }
 * 
 * En appliquant cette méthode à tous les éléments du tableau, l'un après l'autre, la variable "max" contiendra
 * la plus grande de toutes les longueurs à la fin du parcours.
 * 
 * Pour se "souvenir" du mot de taille maximal, on l'enregistre tout de suite dans la variable "longestWord" :
 * 
 * if (wordsArray[i].length > max) {
 *    max         = wordsArray[i].length;
 *    longestWord = wordsArray[i];
 * }
 * 
 * Note : à tout moment, si un mot est enregistré dans "longestWord", alors c'est que c'est le plus long de tous ceux qu'on
 * a parcourus jusque là, et sa taille est enregistré dans "max".
 * 
 * Au fur et à mesure que l'on parcours le tableau, on tombe sur de nouveaux "candidats" à être le maximum ; en enregistrant
 * chaque nouveau candidat dans la variable longestWord (et donc en remplaçant le précédent - qui était plus court),
 * on termine bien avec le plus grand d'entre eux dans "longestWord" à la fin du parcours.
 * 
 * En répétant ces 2 instructions (enregistrer le nouveau max, et enregistrer le mot associé) pour chaque mot du tableau,
 * on termine le parcours avec la plus grande longueur dans la variable "max" et le mot associé (le plus long du tableau)
 * dans la variable "longestWord".
 * 
 * Remarque : lorsque 2 mots ont tous les deux la taille maximale, le premier est enregistré dans la variable "longestWord".
 * Lorsque la boucle arrive sur le second, elle compare sa taille à la taille du premier avec l'instruction
 * "if (words[i].length > max") (-> à ce stade de la boucle, "words[i].length" est la taille du second, et "max" la taille
 * du premier).
 * Comme l'inégalité est "stricte" (on utilise ">" et pas ">="), la condition (wordsArray[i].length > max) est fausse
 * (car les 2 longueurs sont égales).
 * Les variables "max" et "longestWord" ne sont donc pas modifiées, et "longestWord" contient toujours le premier mot.
 * 
 * À la fin de la fonction, l'instruction "return longestWord;" renverra donc bien le premier des 2 mots les plus longs.
 * 
 * Note : ça fonctionne aussi si le tableau contient plus de 2 mots de la taille maximale.
 */

  let max         = 0;
  let longestWord = null;

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > max) {
      max         = wordsArray[i].length
      longestWord = wordsArray[i]
    }
  }

  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {     // À chaque tour de boucle, on ajoute le nombre "numbersArray[i]"
    sum += numbersArray[i];                           // dans la variable "sum"
  }                                                   // ("sum += numbers[i];" est équivalent à "sum = sum + numbers[i];")

  // À la fin de la boucle, on a donc ajouté tous les entiers "numbersArray[i]" à "sum".

  return sum;
}

// Iteration #3.1 Bonus:
function sum(genericArray) {

  let sum = 0;

  for (let i = 0; i < genericArray.length; i++) {
    switch (typeof genericArray[i]) {
      case "boolean":
        sum += Number(genericArray[i]);
        break;
      case "number":
        sum += genericArray[i];
        break;
      case "string":
        sum += genericArray[i].length;
        break;
      case "undefined": case "null":
        break;
      default:
        throw "Unsupported data type sir or ma'am";
    }
  }

  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length > 0) {
    return sumNumbers(numbersArray) / numbersArray.length;
  } else {
    return null;
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArray) {
  let lengths = [];

  wordsArray.forEach(item => lengths.push(item.length));

  return averageNumbers(lengths);
}

// Bonus - Iteration #4.1
function avg(genericArray) {
  if (genericArray.length > 0) {
    return sum(genericArray) / genericArray.length;
  } else {
    return null;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsArray) {
  let i = 0;

  if (wordsArray.length === 0) {
    return null;
  } else {
    while (i < wordsArray.length) {
      let currentWord         = wordsArray[i];
      let nextOccurenceIndex  = wordsArray.slice(i + 1).indexOf(currentWord);

      // Cleaning all occurences of uniquified[i]
      while (nextOccurenceIndex != -1) {
        wordsArray.splice(nextOccurenceIndex + i + 1, 1);   // nextOccurenceIndex is relative to a slice starting at i + 1
        nextOccurenceIndex    = wordsArray.slice(i + 1).indexOf(currentWord);
      }

      i++;
    }
  }

  return wordsArray;
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, word) {
  let wordIsInArray = false;

  if (wordsArray.length === 0) {
    return null;
  } else {
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i] === word) {
        wordIsInArray = true;
        break;
      }
    }

  return wordIsInArray;
  }
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArray, word) {
  let count = 0;

  wordsArray.forEach(item => count += Number(item === word));
  return count;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let max = 0;

  // Checking lines
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[j].length - 4; j++) {
      horizontalProduct = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];

      if (horizontalProduct > max) {
        max = horizontalProduct;
      }
    }
  }

  // Checking columns
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length - 4; i++) {
      verticalProduct = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];

      if (verticalProduct > max) {
        max = verticalProduct;
      }
    }
  }

  return max;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
