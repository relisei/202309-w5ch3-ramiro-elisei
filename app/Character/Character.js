class Character {
  name;
  family;
  age;
  isAlive = true;
  serie = "Games of throne";

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  die() {
    this.isAlive = false;
  }

  phraseItSays() {
    return `My name is ${this.name}`;
  }
}

export default Character;
