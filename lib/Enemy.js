const Character = require('./Character.js');
const Potion = require('./Potion');

class Enemy {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
		this.potion = new Potion();

		this.health = Math.floor(Math.random() * 10 + 85);
		this.strength = Math.floor(Math.random() * 5 + 5);
		this.agility = Math.floor(Math.random() * 5 + 5);
	};

	getDescription() {
		return `${this.name} holding a ${this.weapon} has appeared!`;
	};
};

module.exports = Enemy;
