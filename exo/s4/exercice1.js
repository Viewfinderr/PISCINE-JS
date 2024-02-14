// Exercice 1: Utilisation de Promise.all
const four = Promise.resolve(4);
const hello = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Hello');
});
const done = new Promise((resolve, reject) => {
  reject('Its Done');
});

Promise.all([four, hello, done]).then((values) => {

  console.log(values);
});
