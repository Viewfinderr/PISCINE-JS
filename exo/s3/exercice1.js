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
