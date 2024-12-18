const numberRandomizer = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ! SNACK 1
/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

let weightHeavierBicycles = 0;
let nameHeavierBicycles = "";

const bicycles = [
  {
    name: "Bergamont",
    weight: 0,
  },
  {
    name: "Bianchi",
    weight: 0,
  },
  {
    name: "BMC",
    weight: 0,
  },
  {
    name: "Cannondale",
    weight: 0,
  },
];

for (const bike of bicycles) {
  bike.weight = numberRandomizer(0, 50);
  if (bike.weight > weightHeavierBicycles) {
    weightHeavierBicycles = bike.weight;
    nameHeavierBicycles = bike.name;
  }
}

console.log(bicycles);
console.log(
  `La bicicletta più pesante è la ${nameHeavierBicycles} con ${weightHeavierBicycles}kg`
);

console.log("***********************************************************");
// ! SNACK 2
/* 
Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const footballSquads = [
  {
    name: "Atalanta",
    points: 0,
    foul: 0,
  },
  {
    name: "Juventus",
    points: 0,
    foul: 0,
  },
  {
    name: "Roma",
    points: 0,
    foul: 0,
  },
  {
    name: "Milan",
    points: 0,
    foul: 0,
  },
  {
    name: "Inter",
    points: 0,
    foul: 0,
  },
  {
    name: "Napoli",
    points: 0,
    foul: 0,
  },
  {
    name: "Torino",
    points: 0,
    foul: 0,
  },
];

const footballSquadsFouls = [];

for (const squad of footballSquads) {
  //randomizzazione punti e falli per ogni singola squadra
  squad.points = numberRandomizer(0, 50);
  squad.foul = numberRandomizer(0, 50);

  // destrutturazione di ogni singolo oggetto presente nell'array
  const { name, foul } = squad;
  // creazione nuovo array di oggetti con solo nomi e falli delle squadre
  footballSquadsFouls.push({ name, foul });
}

console.log(footballSquads);
console.log(footballSquadsFouls);

console.log("***********************************************************");
// ! SNACK 3
/* 
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

const createArray = (totPosArray) => {
  const newArray = [];
  for (let i = 0; i < totPosArray; i++) {
    newArray.push(numberRandomizer(0, 50));
  }
  return newArray;
};

const valuesBetweenRange = (array, minIndex, maxIndex) => {
  const valuesBetweenRange = [];

  if (
    minIndex < 0 ||
    maxIndex < 0 ||
    minIndex > maxIndex ||
    maxIndex > array.length - 1
  ) {
    console.error(
      `i numeri inseriti non sono validi:
      - inserisci numeri maggiori di 0 per il range,
      - il primo numero deve essere maggiore del secondo
      - il secondo numero non può essere uguale o maggiore della lunghezza dell'array`
    );
    return;
  }

  for (let i = minIndex + 1; i < maxIndex; i++) {
    valuesBetweenRange.push(array[i]);
  }
  return valuesBetweenRange;
};

const numberOfPosArray = 10;
const arrayOfNumbers = createArray(numberOfPosArray);
console.log(arrayOfNumbers);
console.log(valuesBetweenRange(arrayOfNumbers, 2, 6));
