// SNACK 1: Bici più leggera
const bici = [
  { nome: "Bianchi", peso: 7.5 },
  { nome: "Colnago", peso: 6.8 },
  { nome: "Pinarello", peso: 7.2 },
  { nome: "Specialized", peso: 6.5 },
];

// Trova la bici con il peso minore
let biciLeggera = bici[0];
for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

console.log(`La bici più leggera è la ${biciLeggera.nome} con peso ${biciLeggera.peso} kg`);

// SNACK 2: Squadre di calcio
const squadre = [
  { nome: "Milan", punti: 0, falli: 0 },
  { nome: "Inter", punti: 0, falli: 0 },
  { nome: "Juventus", punti: 0, falli: 0 },
  { nome: "Napoli", punti: 0, falli: 0 },
  { nome: "Roma", punti: 0, falli: 0 },
];

// Funzione per generare numeri random
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Assegna numeri random a punti e falli
for (let squadra of squadre) {
  squadra.punti = random(1, 100);
  squadra.falli = random(1, 50);
}

// Crea nuovo array con solo nome e falli
const nomiEFalli = squadre.map(({ nome, falli }) => ({ nome, falli }));

console.log("Tutte le squadre:", squadre);
console.log("Nomi e falli:", nomiEFalli);

// SNACK 3: Funzione intervallo di elementi
function arrayIntervallo(arr, a, b) {
  const nuovoArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i >= a && i <= b) {
      nuovoArray.push(arr[i]);
    }
  }

  return nuovoArray;
}

// Esempio d’uso
const numeri = [10, 20, 30, 40, 50, 60, 70];
const risultato = arrayIntervallo(numeri, 2, 5);
console.log("Array originale:", numeri);
console.log("Nuovo array (posizioni 2-5):", risultato);