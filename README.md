# cost-per-crane-type

imple aplicación de cálculo de costo según el tipo de grúa, puedes seguir estos pasos:

Define las constantes para los costos por kilómetro y el costo base para cada tipo de grúa:
javascript
Copy code
const costs = {
  A: { costPerKm: 18.82, baseCost: 528.69 },
  B: { costPerKm: 20.62, baseCost: 607.43 },
  C: { costPerKm: 23.47, baseCost: 721.79 },
  D: { costPerKm: 32.35, baseCost: 885.84 },
};
Crea una función para calcular el costo total de acuerdo al tipo de grúa y la distancia:
javascript
Copy code
const calculateCost = (type, distance) => {
  const { costPerKm, baseCost } = costs[type];
  return baseCost + costPerKm * distance;
};
Utiliza un código para solicitar al usuario que ingrese el tipo de grúa y la distancia, y luego muestra el costo total:
javascript
Copy code
const tipoGrua = prompt('Ingrese el tipo de grúa (A, B, C o D):');
const distancia = parseFloat(prompt('Ingrese la distancia en kilómetros:'));

if (costs[tipoGrua]) {
  const costoTotal = calculateCost(tipoGrua, distancia);
  console.log(`El costo total es: $${costoTotal.toFixed(2)}`);
} else {
  console.log('Tipo de grúa no válido. Debe ser "A", "B", "C" o "D".');
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/cost-per-crane-type.git
cd cost-per-crane-type
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
