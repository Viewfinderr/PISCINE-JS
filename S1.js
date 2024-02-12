// Exercice 1

console.log("Hello World !")

// Exercice 2: Calculer la somme de deux nombres

console.log(4 + 5)

// Exercice 3: Comparer deux nombres

console.log(4 == 5 )

// Exercice 4: Vérifier si un nombre est pair ou impair

console.log(4 % 2 === 0)

// Exercice 5: Manipulation de chaînes de caractères
var chaine = "Hello World"
console.log(chaine)
chaine = "Bonjour le monde"
console.log(chaine)

// Exercice 6: Boucle for

let quatre = 4;

for (let i = 0; i < 6; i++) {
  quatre = quatre + i;
}

console.log(quatre);

// Exercice 7: Table de multiplication

console.log( 4 *  5);

// Exercice 8: Recherche dans un tableau

let chiffres = [4, 5];
let first = chiffres[0];

// Exercice 9: Inverser une chaîne de caractères
var hello = "hello";
var hello = hello.split("")
console.log(hello.reverse())

// Exercice 10: Calculer la factorielle d'un nombre

function fact(nbr) {
  if (nbr === 0)
  {
     return 1;
  }
  return nbr * fact(nbr-1);
}

console.log(fact(2));
