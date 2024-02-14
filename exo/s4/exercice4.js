// Exercice 4: Création d'une fonction de debounce

const debounce = (mainFunction, delay) => {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction();
    }, delay);
  };
}

function listPreference() {
  console.log("List suggestion is done.")
}

const debouncedListPreference = debounce(listPreference, 3000);

debouncedListPreference();
