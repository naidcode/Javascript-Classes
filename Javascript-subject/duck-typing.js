class Car {
  move() {
    console.log("Car is driving");
  }
}

class Bike {
  move() {
    console.log("Bike is moving");
  }
}

class Bus {
  move() {
    console.log("Bus is transporting passengers");
  }
}

function startJourney(transport) {
  if (typeof transport.move === "function") {
    transport.move();
  } else {
    console.log("This transport can't move!");
  }
}

// create instances
const car = new Car();
const bike = new Bike();
const bus = new Bus();
const brokenTransport = {}; // doesn't have move()

// use them
startJourney(car);            // Car is driving
startJourney(bike);           // Bike is moving
startJourney(bus);            // Bus is transporting passengers
startJourney(brokenTransport); // This transport can't move!
