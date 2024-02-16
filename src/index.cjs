"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.CharacterBuilder = exports.Character = void 0;
var Character = /** @class */ (function () {
  function Character(options) {
    this.name = options.name || "";
    this.classChar = options.classChar || "";
    this.level = options.level || 0;
    this.hp = options.hp || 0;
    this.strength = options.strength || 0;
    this.intelligence = options.intelligence || 0;
    this.luck = options.luck || 0;
  }
  Character.prototype.getCharacter = function () {
    console.log(
      "You created a "
        .concat(this.classChar, " level ")
        .concat(this.level, " called ")
        .concat(this.name, " with the next stats:")
    );
    console.log("Hp: ".concat(this.hp));
    console.log("Str: ".concat(this.strength));
    console.log("Int: ".concat(this.intelligence));
    console.log("Luck: ".concat(this.luck));
  };
  return Character;
})();
exports.Character = Character;
var CharacterBuilder = /** @class */ (function (_super) {
  __extends(CharacterBuilder, _super);
  function CharacterBuilder() {
    return (
      _super.call(this, {
        name: "",
        classChar: "",
        level: 0,
        hp: 0,
        strength: 0,
        intelligence: 0,
        luck: 0,
      }) || this
    );
  }
  CharacterBuilder.prototype.setName = function (name) {
    this.name = name;
    return this;
  };
  CharacterBuilder.prototype.setClassChar = function (classChar) {
    this.classChar = classChar;
    return this;
  };
  CharacterBuilder.prototype.setLevel = function (level) {
    this.level = level;
    return this;
  };
  CharacterBuilder.prototype.setHp = function (hp) {
    this.hp = hp;
    return this;
  };
  CharacterBuilder.prototype.setStrength = function (strength) {
    this.strength = strength;
    return this;
  };
  CharacterBuilder.prototype.setIntelligence = function (intelligence) {
    this.intelligence = intelligence;
    return this;
  };
  CharacterBuilder.prototype.setLuck = function (luck) {
    this.luck = luck;
    return this;
  };
  CharacterBuilder.prototype.build = function () {
    return new Character(this);
  };
  return CharacterBuilder;
})(Character);
exports.CharacterBuilder = CharacterBuilder;
var warrior = new CharacterBuilder()
  .setClassChar("Warrior")
  .setName("John")
  .setHp(500)
  .setLevel(1)
  .setStrength(50)
  .setLuck(10)
  .setIntelligence(0)
  .build();
warrior.getCharacter();
var mage = new CharacterBuilder()
  .setClassChar("Mage")
  .setName("Mark")
  .setHp(200)
  .setLevel(1)
  .setStrength(0)
  .setLuck(50)
  .setIntelligence(100)
  .build();
mage.getCharacter();
