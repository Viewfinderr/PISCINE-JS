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

console.log(categoryCinema);
