// Iteration #1: Find the maximum

// correction d'Antoine, ma version personnelle était loin du bon résultat "excepté l'utilisation du Math.max".

function maxOfTwoNumbers(firstScore, secondScore) {
  return Math.max(firstScore, secondScore);
}

// test
let largest = maxOfTwoNumbers(13, 14);
console.log(largest); // affiche 14

// la fonction sert de module de calcul lorsqu'une variable est déclarée avec des valeurs.



// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  
  if (words.length < 1) return null;

  let longestWord = ``;

  for ( i = 0; i <= words.length; i++) {
    let word = words[i]; // word[i] represente en enième mot de l'array.

    if (word.length > longestWord.length) {
     longestWord = word; // parceque longestWord est plus long que word, il devient le "nouveau" longestWord".
    }
  }

  return longestWord;
}

let longest = findLongestWord(words);
console.log(longest);

// probleme : longestWord ne serait pas défini. Je ne vois pas l'erreur dans le code.




// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  
  let total = 0;
  
  for (let i = 0; i <= numbers.length; i++) {

    total += numbers[i]; //total est le résultat de l'addition "la la chaine" de l'array "number".
  }
 
  return total;
}

const sum = sumNumbers(numbers);
console.log(sum);


// total n'est pas défini. je ne trouve pas l'erreur sur le console.log.




// Iteration #3.1 Bonus:

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(mixedArr) {

  let sum = 0;

  mixedArr.forEach(function(elem) { //forEach permet de donner une action pour chaque élement que l'on choisit de différencier par la suite (entre les break).
    switch (typeof elem) { //typeOf permet de différencier "boolean", "string" et "nombre".
      case 'number':
        elem += elem; //nombre, on additionne chaque élément dans la chaine des "elements".
      break;
      case 'boolean':
        if (elem === true) {sum += 1} //pour tout boolean rencontré qui renvoie "true", nous accordons la valeur 1.
         else { sum += 0}; //pour tout boolean qui ne renvoie PAS "true", (induction "false")
      break;
      case 'string' = elem.length;
      break;
   }
  });

  return sum;
}

let total = sum(mixedArr);
console.log(total);


// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {

  if (numbersAvg.length < 1) return null

  return sumNumbers(numbersAvg) / numbersAvg.length;
};

const average = averageNumbers(numbersAvg);
console.log(average);


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {

  if ( wordsArr < 1) return null;

  let sumLetter = 0;

  for (let i = 0; wordsArr.length; i++) { 

    let sumOfLetter += wordsArr[i].length; //sumOfLetter vaut l'addition sur la continuité de la chaine wordsArr du nomnbre de lettre de chaque éléments. 
  }

  return sumOfLetter/wordsArr.length; //wordsArr.length permet de ne pas se tromper sur le nombre d'éléments pour la division, astucieux et logique).
}

let averageOfLetter = averageWordLength(wordsArr);
console.log(averageOfLetter);



// Bonus - Iteration #4.1

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(mixedArr) {

  if (mixedArr.length < 1) return null;
  return Number (total/mixedArr.length);
}

let simpleAverage = avg(mixedArr);
console.log(simpleAverage)



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
]; /* pour indexer : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
      cette methode permet de numéroté chaque élément ou cellule du tableau*/

function uniquifyArray(wordsUnique) {

  if (wordsUnique < 1) return null; //vérification.

  let newArray = []; // totalement issue de la correction d'Antoine. il est possible de signifier la création d'un nouveau tableau avec des crochets vides.

  for ( let i = 0; i <= wordsUnique.length; i++) { //requalifions cette ligne comme zone de recherche des éléments de la fonction.
    if newArray.indexOf(wordsUnique[i]) === -1 { //je signifie que si, dans mon tableau newArray, la valeur de wordUnique controlé, n'est pas présente...
    newArray.push(wordsUnique[i]); //... alors je pousse dans newArray l'élément présent dans wordsUnique.
    }
  }

  return newArray;
}

let arrayOfUniqueWords = uniquifyArray(wordsUnique);
console.log(arrayOfUniqueWords);

/* maintenant que la fonction existe, il m'est possible de dupliquer cette dernière en changeant l'array de référence.
   ex :

   let arrayOfSuppliers = uniquifyArray(supplierUnique);
   let arrayOfCustomer = uniquifyArray(clientUnique);

   l'intéret des de pouvoir faire appel a cette méthode de calcul résumé dans la fonction a chaque fois qu'on en a besoin.
   la seule manipulation a faire serait de changer l'origine de la "data" qui est appelé entre les "()" de la fonction appelée.*/




// Iteration #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind) {

  if (wordsFind < 1) return null;

  let wordSearch = '';


  for (let i = 0; i <= wordsFind; i++) {

    let wordFound = wordsFind[i];

    if ( wordSearch === wordFound) {
      return true
    } else {
        return false;
      }
    }

  }

console.log(doesWordExist(wordsFind)); //demander correction sur cette méthode.


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

function howManyTimes(wordsCount, word) { //nous intégrons un élément "word" dans ce type de fonction pour être mot "recherché)".

  if (matrix < 1) return null;

  let timeWordFound = 0;

  for (let i = 0; i <= wordsCount.length; i++) {

    if (wordsCount[i] === word){ //exemple à garder dans le cas d'une recherche spécifique dans un tableau.
    timeWordFound++; //la formule signifie de rechercher un nombre de fois ou le mot recherché est trouvé dans l'array.
    }
  }

  return timeWordFound;

}

//correction d'Antoine
const howManyMatter = howManyTimes(wordsCount, 'matter');
console.log(howManyMatter);

const howManyDog = howManyTimes(wordsCount, 'dog');
console.log(howManyDog);
//lors de l'appel de fonction, on détermine le mot recherché à la suite du tableau initial.




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

  function greatestProduct(m) {

    let result = -Infinity; //"Infinity" est une fonction de Javascript qui a pour but dans notre cas d'effectuer sur tout le tableau les opérations permettant de reprérer le produit le plus élevé. Celà évite de donner des colonnes ou ligne spécifiques, toutes seront traitées.//
    let horizontal, vertical; //ne pas oubblier comme dans la correction qu'il est possible de déclarer deux variables en même temps. Utilie si elles sont liées.//

    const nRows = m.length; //dans une array, la longeur des éléments représente le nombre de colonnes.//
    const nCols = m[0].length; //dans une array une suite de [] permet de comprendre que chaque array "internes" représente une nouvelle ligne.//
    
    function el(i, j) { //une fonction dans une fonction pour rechercher un élément correspondant à une colonne et une ligne (ressemble à Vlookup d'excel).//
      return ((m[i] || [])[j] || 1); //besoin d'explications.//
    }
    // With a double for loop [i,j], loop through all our elements
    for (let i=0; i < nRows-1; i++) { //on choisit "i" pour les lignes.
      for (let j=0; j < nCols-1; j++) { //on choisit "j" pour les colonnes.
        
        horizontal = el(i, j) * el(i, j+1) * el(i, j+2) * el(i, j+3); //on controle à l'horizontal 4 éléments (3 colonnes à la suite croissante de l'élément de base).
        
        vertical = el(i, j) * el(i+1, j) * el(i+2, j) * el(i+3, j); //on controle verticalement en controlant 3 lignes après la ligne de base.
        result = Math.max(result, horizontal, vertical); //on cherche le maximum trouvé par une infinité d'opération dans notre matrice sur deux dimensions, verticale et horizontale.
      }
    }
    return result;
  }
}

//exemple test Antoine.
const maxProduct = greatestProduct(matrix);
console.log(maxProduct);




/* The following is required to make unit tests work.
Environment setup. Do not modify the below code. */
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
