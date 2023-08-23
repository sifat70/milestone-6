const numbers = [7, 55, 2, 5, 8];
const players = [78, 75, 76, 59, 55, 66, 65];

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1)
console.log(selected);

const friends = ['Tom', 'john', 'micheal', 'olivar'];
const oddFriends = friends.filter(friend => friend.length >4)
console.log(oddFriends)