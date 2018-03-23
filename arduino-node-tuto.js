const { Board, Button, Led, Pin } = require('johnny-five');

const Arduino1 = new Board({timeout: 5000});


Arduino1.on("ready", () => {
  
  const pin7 = new Led(7);
  const pin4 = new Button({pin: 4});
  const pin2 = new Led(2);

  pin2.on();

  setInterval(() => {

    pin7.toggle();

  }, 5000);

  pin4.on("release", (e) => {
    
    pin7.toggle();

  })

});

Arduino1.on("error", (err) => {

  console.log('error', err);

});
