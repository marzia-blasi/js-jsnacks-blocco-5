const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(person.name);
}

let persone;

people.forEach((person, i, people) => {
  console.log(person.name);
});
