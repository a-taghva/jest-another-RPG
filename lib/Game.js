const inquirer = require('inquirer');
const Enemy = require('./Enemy.js');
const Player = require('./Player,js');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

module.exports = Game;