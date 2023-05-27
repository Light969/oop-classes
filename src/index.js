import './css/style.css';
// import './js/app.js';
// import './js/Character';
import Character from './js/Character';

import Bowerman from './js/Bowerman';

import Daemon from './js/Daemon';

import Magician from './js/Magician';

import Swordsman from './js/Swordsman';

import Undead from './js/Undead';

import Zombie from './js/Zombie';

const person = new Character('Petya', 'Daemon');
console.log(person);
const bowerman = new Bowerman('Sasha', 'Bowerman');
console.log(bowerman);
const daemon = new Daemon('Dima', 'Daemon');
console.log(daemon);
const magician = new Magician('Lesya', 'Magician');
console.log(magician);
const swordsman = new Swordsman('Masha', 'Swordsman');
console.log(swordsman);
const undead = new Undead('Kolya', 'Undead');
console.log(undead);
const zombie = new Zombie('Andrey', 'Zombie');
console.log(zombie);
