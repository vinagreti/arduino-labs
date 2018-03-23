const { Board, Pin } = require('johnny-five');

const Arduino1 = new Board({timeout: 5000});

Arduino1.on("ready", () => {

  const pin = new Pin(4);

  pin.on();

});

Arduino1.on("error", (err) => {

  console.log('error', err);

});
