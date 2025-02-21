class Car {
    static getSpecs(car) {
      car = {
        maxSpeed: 360,
        speed: 240,
        isOn: true,
        distance: 54012,
        price: 1200000,
      };
      const values = Object.values(car);
      console.log(values);
    }
    constructor({speed, price, maxSpeed, isOn, distance} = {}) {
      this.speed = 0;
      this.price = 800000;
      this.maxSpeed = 300;
      this.isOn = false;
      this.distance = 0;
      console.log({speed, price, maxSpeed, isOn, distance});
    }
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
  
    getPrice() {
      console.log(this.price);
      return this.price;
    }
  
    setPrice(_price) {
      const insurance = 1000;
      this.price += insurance;
      console.log(this.price);
    }
  
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
  
    turnOn() {
      if (this.speed < 40) {
        this.isOn = true;
        console.log(this.isOn);
      } else if (this.isOn) {
        return true;
      }
    }
  
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
      if (this.speed == 0) {
        this.isOn = false;
      } else {
        return true;
      }
    }
  
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
  
    accelerate(value) {
      this.speed += value;
      console.log(`This is speed after adding: ${this.speed}`);
      if (this.speed > this.maxSpeed) {
        console.log("You can add this numbers, something wrong");
      } else {
        return false;
      }
    }
  
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
      if (this.speed > 0) {
        this.speed -= value;
        console.log(this.speed);
      } else {
        console.log("not all right");
        return false;
      }
    }
  
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
      if (this.isOn) {
        this.distance = hours * this.speed;
        console.log(this.distance);
      } else {
        console.log("object");
        return false;
      }
    }
  }
  
  const mustang = new Car({maxSpeed: 200, price: 2000 });
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  // Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  // Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000