import Character from './character.js';
import Team from './team.js';
import canIterate from './canIterate.js';

const team1 = new Team();
const character1 = new Character('Bobr', 'animal', 100, 1, 15, 5);
const character2 = new Character('Kurva', 'animal', 100, 1, 15, 5);
team1.addCharacter(character1);
team1.addCharacter(character2);

// Исп генератор
const teamCharacters = team1[Symbol.iterator]();
console.log(teamCharacters.next().value);
console.log(teamCharacters.next().value);

// Исп итератор
/*const teamIterator = team1.iterator;
console.log(teamIterator.next().value);
console.log(teamIterator.next().value);*/

// Проверяем canIterate
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
