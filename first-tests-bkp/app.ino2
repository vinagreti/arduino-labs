#include "./push-button/PushButton.h"

Fader fader = Fader(4, 7);

void setup()
{
    Serial.begin(115200);

    fader.init();

}

void loop()
{
    fader.check();

    //delay(1500);
}

void resetPins()
{
    digitalWrite(1, 0);
    digitalWrite(2, 0);
    digitalWrite(3, 0);
    digitalWrite(4, 0);
    digitalWrite(5, 0);
    digitalWrite(6, 0);
    digitalWrite(7, 0);
    digitalWrite(8, 0);
    digitalWrite(9, 0);
    digitalWrite(0, 0);
    digitalWrite(11, 0);
    digitalWrite(12, 0);
    digitalWrite(13, 0);
}