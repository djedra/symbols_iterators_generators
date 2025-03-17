import Character from './character.js';

export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error('Invalid character object.');
    }
  }

  /* eslint-disable no-restricted-syntax */
  * [Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}
