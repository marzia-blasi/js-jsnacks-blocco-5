const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const pari = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 2 === 0) {
    console.log(num);
    pari.push(num);
  }
}
console.log(pari);

const parucci = [];

nums.forEach((num, i, array) => {
  if (num % 2 === 0) {
    console.log(num);
    parucci.push(num);
  }
});

console.log(parucci);

const parissimi = nums.filter((numb) => numb % 2 === 0); // se tru si  els

console.log(parissimi);
