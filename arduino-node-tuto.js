const { Board, Led } = require('johnny-five');

const Arduino1 = new Board({timeout: 5000});

Arduino1.on("ready", () => {

  const led = new Led(12);

  led.on();

});

Arduino1.on("error", (err) => {

  console.log('error', err);

});
