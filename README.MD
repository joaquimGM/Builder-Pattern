# Builder Pattern

##Installation

npm init -y

npm install -D typescript

npx node index.js

##Usage

```typescript
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
```
