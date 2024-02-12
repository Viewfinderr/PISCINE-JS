// Exercice 1: Somme des éléments d'un tableau

let sumTab= [1, 2, 4];
let sum = 0;
for (let i = 0; i < sumTab.length; i++) {
  sum += sumTab[i];
}

console.log(sum);


// Exercice 2: Trouver le plus grand nombre dans un tableau

console.log(Math.max(4, 8, 3));

// Exercice 3: Filtrer les nombres pairs d'un tableau

const numbers = [7, 68, 1, 2, 1, 8, 13];
const oddsNumbers = numbers.filter((num) => num % 2 === 0);
console.log(oddsNumbers);

// Exercice 4: Trouver un élément dans un tableau d'objets

const arr = [4, 78, 3];

const found = arr.find((element) => element > 10);

console.log(found);

// Exercice 5: Compter les occurrences d'une lettre dans une chaîne

  let count = 0;

  for (let i = 0; i < "BESSE".length; i++) {

      if ("BESSE".charAt(i) == "S") {
          count += 1;
      }
  }
  console.log(count)

// Exercice 6: Trier un tableau de nombres

const arr2 = [7, 68, 1, 2, 1, 8, 13];
arr2.sort();
console.log(arr2);

// Exercice 7: Vérifier si un mot est un palindrome

var word = "lol".split("");
var wordReverse = word.reverse()
console.log(word == wordReverse)


// Exercice 8: Fusionner deux tableaux et supprimer les doublons

const prenom = ["l", "e", "a"];
const nom = ["b", "e", "s", "s", "e"];
const nomPrenom = prenom.concat(nom);

let nomPrenomWithoutDuplicate = [...new Set(nomPrenom)];

console.log(nomPrenomWithoutDuplicate);


// Exercice 9: Calculer l'âge à partir d'une date de naissance

var year = 1995;
const currentYear = new Date().getFullYear();
var age = currentYear - year;
console.log(age)

// Exercice 10: Convertir une chaîne de caractères en camelCase

  console.log("je suis tellement fatiguee quelle dinguerie".toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()))
