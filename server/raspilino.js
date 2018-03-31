const { Board, Button, Led, Pin, Proximity } = require('johnny-five');
const { Raspi } = require("raspi-io");

class Raspilino {

    constructor() {

        this.Rasp = new Board({ timeout: 5000, io: new Raspi() });

        this.pins = [];

        this.initBoard();

    }

    initBoard() {

        this.Rasp.on("ready", () => { });

        this.Rasp.on("error", (err) => console.log('error', err));

    }

    toggle(pin) {

        const _pin = this.pin(pin, 'Led');

        _pin.toggle();

    }

    on(pin) {

        const _pin = this.pin(pin, 'Led');

        _pin.on();

    }

    off(pin) {

        const _pin = this.pin(pin, 'Led');

        _pin.off();

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

        return this.Rasp.pins;

    }

}

exports.Raspilino = Raspilino;