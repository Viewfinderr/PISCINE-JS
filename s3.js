// Exercice 1: Supprimer les éléments falsy d'un tableau

let arr = [];
for (let i = 0; i < 5; i += 1) {
    arr.push(true) && arr.push(false);
}

console.log(arr);

var i = 0;
while (i < arr.length) {
  if (arr[i] === false) {
    arr.splice(i, 1);
  } else {
    ++i;
  }
}

console.log("Without falsy");
console.log(arr);


// Exercice 2: Regrouper des éléments d'un tableau par propriété

const cinemas = [
  { name: 'Bear', category: 'serie' },
  { name: 'Titanic', category: 'movie'},
  { name: 'HMYM', category: 'serie' },
  { name: 'Titanic', category: 'movie'},
];

const groupByCategory = cinemas.reduce((group, cinema) => {
  const { category } = cinema;
  group[category] = group[category] ?? [];
  group[category].push(cinema);
  return group;
}, {});

console.log(groupByCategory);

// Exercice 4: Aplatir un tableau de tableaux

const arra = ["lea", "besse", ["manu", "max"]];

console.log(arra.flat())

// Exercice 5: Créer une fonction de temporisation

function greeting() {
  console.log('And after this one');
}

setTimeout(greeting, 4000);
console.log('First this one');

// Exercice 7: Implémenter une fonction de réduction personnalisée
let table = [14, 25, 42];
let add = 45;

total = table.reduce((acc, value) => acc + value, add);
console.log(total);

// Exercice 8: Trier un tableau d'objets par plusieurs propriétés
const categoryCinema = [
  { name: 'Bear', category: 'serie' },
  { name: 'Titanic', category: 'movie'},
  { name: 'HMYM', category: 'serie' },
  { name: 'Titanic', category: 'movie'},
];

categoryCinema.sort((a, b) => {
  if (a.serie < b.serie) return -1;
  if (a.serie > b.serie) return 1;

  return a.movie - b.movie;
});

console.log(personnes);

