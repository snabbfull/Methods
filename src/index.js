export class Character {
    constructor(name, type, health, level, attack, defence) {
        const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }

        if (!allowedTypes.includes(type)) {
            throw new Error(`Тип должен быть одним из: ${allowedTypes.join(', ')}`);
        }

        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить уровень умершего персонажа');
        }

        this.level = this.level + 1;
        this.attack = this.attack * 1.2;
        this.defence = this.defence * 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            return;
        }
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

export class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowman', 100, 1);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman', 100, 1);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician', 100, 1);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 100, 1);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', 100, 1);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie', 100, 1);
        this.attack = 40;
        this.defence = 10;
    }
}