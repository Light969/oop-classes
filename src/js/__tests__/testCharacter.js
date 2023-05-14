import Character from '../Character';

test('Проверяем Character', () => {
  const testPerson = new Character('Кеша', 'Zombie');
  const result = {
    name: 'Кеша', type: 'Zombie', health: 100, level: 1,
  };
  expect(testPerson).toEqual(result);
});

test('Проверяем имя', () => {
  const name = () => new Character('М', 'Zombie');
  expect(name).toThrow('Имя должно быть строкой и содержать от 2х до 10 символов');
});

test('Проверяем имя', () => {
  const name = () => new Character('Мммммммммммммммммм', 'Zombie');
  expect(name).toThrow('Имя должно быть строкой и содержать от 2х до 10 символов');
});

test('Проверяем имя на предмет строки', () => {
  const name = () => new Character(3, 'Zombie');
  expect(name).toThrow('Имя должно быть строкой и содержать от 2х до 10 символов');
});

test('Проверяем тип', () => {
  const type = () => new Character('Gosha', 'Ludoed');
  expect(type).toThrow('Тип героя должен быть: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
});

// test('Basic Test', () => {
//   let result = 4;
//   expect(result).toBe(4);
// });
