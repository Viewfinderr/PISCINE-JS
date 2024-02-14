// Exercice 2: Gérer les erreurs avec try...catch

var notDoneYet = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Not Done Yet, pls wait.");
});

var notPossible = new Promise((resolve, reject) => {
  reject(new Error("Not possible at all"));
});

Promise.all([
  notDoneYet.catch((error) => {
    return error;
  }),
  notPossible.catch((error) => {
    return error;
  })
]).then((values) => {
  console.log(values[0]);
  console.log(values[1]);
});
