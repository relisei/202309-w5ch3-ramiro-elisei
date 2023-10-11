class Character {
  name;
  family;
  age;
  isAlive = true;
  serie = "Games of throne";

  die() {
    this.isAlive = false;
  }
}

export default Character;
