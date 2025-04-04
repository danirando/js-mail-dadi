let userNumber = Math.floor(Math.random() * 6 + 1);
let computerNumber = Math.floor(Math.random() * 6 + 1);
let numbers = [];

for (i = 0; i < 1; i++) {
  numbers.push(userNumber);
  numbers.push(computerNumber);
  if (numbers[0] > numbers[1]) alert("Vince User");
  else if (numbers[0] < numbers[1]) alert("Vince il computer");
  else alert("Pareggio");
}

console.log(numbers);
