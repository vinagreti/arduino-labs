const { Board, Button, Led, Pin, Proximity } = require('johnny-five');

class Ardulino {

    constructor() {

        this.Arduino = new Board({ timeout: 5000 });

        this.pins = [];

        this.initBoard();

    }

    initBoard() {

        this.Arduino.on("ready", () => {});

        this.Arduino.on("error", (err) => console.log('error', err));

    }

    toggle(pin) {

        const _pin = this.pin(pin, 'Led');

        _pin.toggle();

    }

    type(pin) {

        const _pin = this.pin(pin, 'Led');

        return {
            type: '_pin.type'
        };

    }

    pin(pin, type) {

        if (this.pins[pin]) {

            return this.pins[pin];

        } else {

            return this.connectByType(pin, type);

        }


    }

    connectByType(pin, type) {

        switch (type) {
            case 'Led':
                this.pins[pin] = new Led(pin);
                break;
            case 'Pin':
                this.pins[pin] = new Pin(pin);
                break;
            case 'Button':
                this.pins[pin] = new Button({ pin });
                break;
            default:
                this.pins[pin] = new Pin(pin);
                break;
        }

        return this.pins[pin];

    }

    boardStatus() {

        return this.Arduino.pins;

    }
    
}

exports.Ardulino = Ardulino;