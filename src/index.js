import Character from './character.js';
import Team from './team.js';
import canIterate from './canIterate.js';

const team1 = new Team();
const character1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const character2 = new Character('Маг', 'Mage', 50, 1, 30, 5);
team1.addCharacter(character1);
team1.addCharacter(character2);

// Итерация
for (const character of team1) {
  console.log(character);
}

// Проверка canIterate
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
