class Character {
	isAlive() {
		return (this.health === 0) ? false : true;
	};

	getHealth() {
		return `${this.name}'s health is now ${this.health}`;
	};

	getAttackValue() {
		const min = this.strength - 5;
		const max = this.strength + 5;

		return Math.floor(Math.random() * (max - min) + min);
	};

	reduceHealth() {
		this.health -= health;

		(this.health < 0) && (this.health = 0);
	};
}


module.exports = Character;
