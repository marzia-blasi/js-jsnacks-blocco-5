const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const pari = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 2 === 0) {
    console.log(num);
  }
}

nums.forEach((num, i, array) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

const parissimi = nums.forEach((numb) => numb % 2 === 0);

console.log(parissimi);
