class player {
  constructor(attack, distance, stoned) {
    this._attack = attack;
    this._distance = distance;
    this._isStoned = stoned;
  }

  set attack(power) {
    this._attack = power;
  }

  get attack() {
    let result = (this._attack * (100 - ((this._distance - 1) * 10))) / 100;

    if (this._isStoned === true) {
      result -= Math.log2(this._distance) * 5;
    }

    return Math.max(0, result);
  }

  get isStoned() {
    return this._isStoned;
  }

  set isStoned(status) {
    this._isStoned = status;
  }
}

export default player;
