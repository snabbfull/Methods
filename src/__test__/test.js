import { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from "../index";

test('Character test', () => {
    const myObject = { name: 'Igor', type: 'Bowman', health: 100, level: 1, attack: 0, defence: 0 };
    const result = new Character(myObject.name, myObject.type, myObject.health, myObject.level, myObject.attack, myObject.defence);

    expect(result).toEqual(myObject);
});

test('Bowerman test', () => {
    const myObject = { name: 'Ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 };
    const result = new Bowerman(myObject.name);

    expect(result).toEqual(myObject);
});

test('Swordsman test', () => {
    const myObject = { name: 'Oleg', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 };
    const result = new Swordsman(myObject.name);

    expect(result).toEqual(myObject);
});

test('Magician test', () => {
    const myObject = { name: 'Tigr', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 };
    const result = new Magician(myObject.name);

    expect(result).toEqual(myObject);
});

test('Daemon test', () => {
    const myObject = { name: 'Efim', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40 };
    const result = new Daemon(myObject.name);

    expect(result).toEqual(myObject);
});

test('Undead test', () => {
    const myObject = { name: 'Stepan', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 };
    const result = new Undead(myObject.name);

    expect(result).toEqual(myObject);
});

test('Zombie test', () => {
    const myObject = { name: 'Egor', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 };
    const result = new Zombie(myObject.name);

    expect(result).toEqual(myObject);
});

test('Character name error test 1', () => {
    expect(() => {
        new Character('Igorilla4352', 'Bowman');
    }).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('Character name error test 2', () => {
    expect(() => {
        new Character(45, 'Bowman');
    }).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('Character type error test 1', () => {
    expect(() => {
        new Character('Igor', 45);
    }).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('Character type error test 2', () => {
    expect(() => {
        new Character('Igor', 'Warrior');
    }).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('levelUp should increase level, attack, defence, and restore health', () => {
    const myObject = new Character('Ivan', 'Bowman', 100, 1, 20, 30);
    myObject.levelUp();
    expect(myObject.level).toBe(2);
    expect(myObject.attack).toBeCloseTo(24);
    expect(myObject.defence).toBeCloseTo(36);
    expect(myObject.health).toBe(100);
});

test('levelUp should throw error if character is dead', () => {
    const myObject = new Character('Deadman', 'Bowman', 0, 1, 20, 30);
    expect(() => {
        myObject.levelUp();
    }).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('damage should decrease health correctly', () => {
    const myObject = new Character('Ivan', 'Bowman', 100, 1, 20, 50);
    myObject.damage(50);
    expect(myObject.health).toBe(75);
});

test('damage should not decrease health below zero', () => {
    const myObject = new Character('Ivan', 'Bowman', 10, 1, 20, 0);
    myObject.damage(50);
    expect(myObject.health).toBe(0);
});

test('damage should do nothing if health <= 0', () => {
    const myObject = new Character('Ivan', 'Bowman', 0, 1, 20, 30);
    myObject.damage(50);
    expect(myObject.health).toBe(0);
});