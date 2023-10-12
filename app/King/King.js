import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign;

  constructor(name, family, yearsOfReign) {
    super(name, family, yearsOfReign);
    this.yearsOfReign = yearsOfReign;
  }

  phraseItSays() {
    return `${super.phraseItSays()}. Everybody will die`;
  }
}

export default King;
