/// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test
var personnes = [
  { nom: "Pierre", age: 25 },
  { nom: "Paul", age: 17 },
  { nom: "Jacques", age: 30 },
];

function isMajor(personnes) {
    var count = 0;
  for (let i = 0; i < personnes.length; i++) {
    if (personnes[i].age < 18) {
     count ++;
    }
  }

  if(count >0){
    console.log("Sorry, next time !")
  }else{
    console.log("Ok, let's dance in da club")
  }
}

isMajor(personnes);
