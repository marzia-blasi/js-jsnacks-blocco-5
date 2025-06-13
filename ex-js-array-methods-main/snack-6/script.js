const zucchine = [
  { type: "Napoletana", weight: 10, length: 4 },
  { type: "Trombetta", weight: 13, length: 16 },
  { type: "Napoletana", weight: 4, length: 23 },
  { type: "Trombetta", weight: 11, length: 6 },
  { type: "Napoletana", weight: 2, length: 17 },
  { type: "Romana", weight: 5, length: 10 },
  { type: "Romana", weight: 7, length: 9 },
  { type: "Trombetta", weight: 3, length: 8 },
  { type: "Calabrese", weight: 6, length: 27 },
  { type: "Calabrese", weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

const zucchineLunghissime = [];
const zucchineCortissime = [];

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];
  if (zucchina.length >= 15) {
    zucchineLunghissime.push(
      `la zucchina ${zucchina.type} è lunga ${zucchina.length}`
    );
  } else {
    zucchineCortissime.push(
      `la zucchina ${zucchina.type} è lunga ${zucchina.length}`
    );
  }
}

console.log(zucchineLunghissime);
console.log(zucchineCortissime);

const zucchinalunghettina = [];
const zucchinacortina = [];

zucchine.forEach((zucchina, i, array) => {
  if (zucchina.length >= 15) {
    zucchinalunghettina.push(
      `la zucchina ${zucchina.type} è lunga ${zucchina.length}`
    );
  } else {
    zucchinacortina.push(
      `la zucchina ${zucchina.type} è lunga ${zucchina.length}`
    );
  }
});

console.log(zucchinalunghettina);

console.log(zucchinacortina);

const zucchinalunghetta = zucchine.filter((zucchina, i, array) => {
  if (zucchina.length >= 15) {
    return true;
  }
  return false;
});

console.log(zucchinalunghetta);

const Zucchinalunga = zucchine.filter((zucchina) => zucchina.length >= 15);

console.log(Zucchinalunga);
