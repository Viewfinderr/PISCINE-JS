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
