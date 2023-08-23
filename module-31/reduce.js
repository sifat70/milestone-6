const players = [78, 75, 76, 59, 55, 66, 65];

const total = players.reduce((previous, current) => previous + current, 0)
console.log(total);

const sum = players.reduce((p, c) => p + c, 0)
console.log(sum);