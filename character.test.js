const { Character, CharacterBuilder } = require("./index.cjs");

describe("Character Class", () => {
  test("getCharacter method should display character information", () => {
    const character = new Character({
      name: "TestCharacter",
      classChar: "TestClass",
      level: 5,
      hp: 100,
      strength: 20,
      intelligence: 15,
      luck: 8,
    });

    // Mock console.log to capture the output
    const consoleSpy = jest.spyOn(console, "log");
    character.getCharacter();

    // Assert that console.log was called with the expected output
    expect(consoleSpy).toHaveBeenCalledWith(
      "You created a TestClass level 5 called TestCharacter with the next stats:"
    );
    expect(consoleSpy).toHaveBeenCalledWith("Hp: 100");
    expect(consoleSpy).toHaveBeenCalledWith("Str: 20");
    expect(consoleSpy).toHaveBeenCalledWith("Int: 15");
    expect(consoleSpy).toHaveBeenCalledWith("Luck: 8");

    // Restore the original console.log
    consoleSpy.mockRestore();
  });
});

describe("CharacterBuilder Class", () => {
  test("build method should create a valid Character instance", () => {
    const warrior = new CharacterBuilder()
      .setClassChar("Warrior")
      .setName("John")
      .setHp(500)
      .setLevel(1)
      .setStrength(50)
      .setLuck(10)
      .setIntelligence(0)
      .build();

    // Validate the properties of the built character
    expect(warrior.name).toBe("John");
    expect(warrior.classChar).toBe("Warrior");
    expect(warrior.level).toBe(1);
    expect(warrior.hp).toBe(500);
    expect(warrior.strength).toBe(50);
    expect(warrior.intelligence).toBe(0);
    expect(warrior.luck).toBe(10);
  });
});
