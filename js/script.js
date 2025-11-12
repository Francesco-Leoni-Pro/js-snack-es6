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