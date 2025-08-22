const carSymbol = Symbol('car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const ClonedCar = this.constructor[carSymbol] || this.constructor;
    return new ClonedCar();
  }

  static get [carSymbol]() {
    return this;
  }
}
