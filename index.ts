interface ICharacter {
  name: string;
  classChar: string;
  level: number;
  hp: number;
  strength: number;
  intelligence: number;
  luck: number;
}

class Character {
  name: string;
  classChar: string;
  level: number;
  hp: number;
  strength: number;
  intelligence: number;
  luck: number;

  constructor(options: ICharacter) {
    this.name = options.name || "";
    this.classChar = options.classChar || "";
    this.level = options.level || 0;
    this.hp = options.hp || 0;
    this.strength = options.strength || 0;
    this.intelligence = options.intelligence || 0;
    this.luck = options.luck || 0;
  }

  getCharacter(): void {
    console.log(
      `You created a ${this.classChar} level ${this.level} called ${this.name} with the next stats:`
    );
    console.log(`Hp: ${this.hp}`);
    console.log(`Str: ${this.strength}`);
    console.log(`Int: ${this.intelligence}`);
    console.log(`Luck: ${this.luck}`);
  }
}

class CharacterBuilder extends Character implements ICharacter {
  constructor() {
    super({
      name: "",
      classChar: "",
      level: 0,
      hp: 0,
      strength: 0,
      intelligence: 0,
      luck: 0,
    });
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setClassChar(classChar: string): this {
    this.classChar = classChar;
    return this;
  }

  setLevel(level: number): this {
    this.level = level;
    return this;
  }

  setHp(hp: number): this {
    this.hp = hp;
    return this;
  }

  setStrength(strength: number): this {
    this.strength = strength;
    return this;
  }

  setIntelligence(intelligence: number): this {
    this.intelligence = intelligence;
    return this;
  }

  setLuck(luck: number): this {
    this.luck = luck;
    return this;
  }

  build(): Character {
    return new Character(this);
  }
}

const warrior = new CharacterBuilder()
  .setClassChar("Warrior")
  .setName("John")
  .setHp(500)
  .setLevel(1)
  .setStrength(50)
  .setLuck(10)
  .setIntelligence(0)
  .build();

warrior.getCharacter();

const mage = new CharacterBuilder()
  .setClassChar("Mage")
  .setName("Mark")
  .setHp(200)
  .setLevel(1)
  .setStrength(0)
  .setLuck(50)
  .setIntelligence(100)
  .build();

mage.getCharacter();

export { Character, CharacterBuilder };