// ! SNACK 1
let weightHeavierBicycles = 0;
let nameHeavierBicycles = "";

const bicycles = [
  {
    name: "Bergamont",
    weight: 10,
  },
  {
    name: "Bianchi",
    weight: 40,
  },
  {
    name: "BMC",
    weight: 20,
  },
  {
    name: "Cannondale",
    weight: 5,
  },
];

for (let bike of bicycles) {
  if (bike.weight > weightHeavierBicycles) {
    weightHeavierBicycles = bike.weight;
    nameHeavierBicycles = bike.name;
  }
}

console.log(
  `La bicicletta più pesante è la ${nameHeavierBicycles} con ${weightHeavierBicycles}kg`
);
