/*

*/

strobe(pin) {

    int signal = 7;

    static int blikTime = 10e3;
    static long lastUpdate;

    void setup()
    {

        pinMode(signal, OUTPUT);

        turnOn(signal);

    }

    void loop()
    {

        if (millis() - lastUpdate > blikTime)
        {
            lastUpdate = millis();
            toggle(7);
        }
    }

    void turnOn(int pin)
    {
        digitalWrite(pin, 1);
    }

    void turnOff(int pin)
    {
        digitalWrite(pin, 0);
    }

    void toggle(int pin)
    {
        bool state = digitalRead(pin);

        digitalWrite(pin, !state);
    }
}