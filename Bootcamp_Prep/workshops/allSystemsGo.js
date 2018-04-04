var systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

const allSystemsGo = (systems) => {
  for (let key in systems) {
    let value = systems[key];
    if (typeof value === 'object') {
      let subSystem = allSystemsGo(value);
      if (!subSystem) return false;
    }
    if (!value) return false;
  }
  return true;
}



allSystemsGo(systems); // => false








// OFFICIAL SOLUTION
/*let allSystemsGo = (systems) => {
  for (var key in systems) {
    var value = systems[key];

    if (typeof value === 'object') {

      var subsystemsGo = allSystemsGo(value);
      if (!subsystemsGo) {
        return false;
      }
    }
    if (!value) {
      return false;
    }
  }
  return true;
}*/
