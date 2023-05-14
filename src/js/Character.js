export default class Character {
  constructor(name, type) {
    // name - строка, min - 2 символа, max - 10
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно быть строкой и содержать от 2х до 10 символов');
    }
    // type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie
    if (typeof type === 'string' && (type === 'Bowerman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')) {
      this.type = type;
    } else {
      throw new Error('Тип героя должен быть: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.health = 100;
    this.level = 1;
  }
}
const person = new Character('Mike', 'Zombie');
console.log(person);
