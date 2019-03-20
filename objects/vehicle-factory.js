
'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  }
});

function CarFactory() {
  let car = Object.assign(
    {},
    {name},
    {wheels},
    Vehicle(),
  );
  return Object.freeze(car);
}

function MotorcycleFactory() {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels},
    {wheelie},
    Vehicle(),
  );
  function wheelie () {return 'Wheee!'}

  return Object.freeze(motorcycle);
}

module.exports = CarFactory;
module.exports = MotorcycleFactory;