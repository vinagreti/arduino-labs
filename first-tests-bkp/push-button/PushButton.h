/*
  Push Button - Library for acting with push button
*/

#include "Arduino.h"
#include "Fader.h"

Fader::Fader(int button, int led, int initial)
{
    _button = button;

    _led = led;

    _initial = initial;
}

void Fader::init()
{

    pinMode(_led, OUTPUT);

    pinMode(_button, INPUT);

    digitalWrite(_led, _initial);

    pinMode(2, OUTPUT);

    digitalWrite(2, 1);
}

void Fader::check()
{

    Serial.print("check");

    int buttonState = digitalRead(_button);

    if (!_buttonPressed)
    {
        if (buttonState == HIGH)
        {
            
            _buttonPressed = true;

            toggle();

        }

    } else {

        _buttonPressed = buttonState;

    }
}

void Fader::toggle()
{
    
    bool ledState = digitalRead(_led);

    digitalWrite(_led, !ledState);

}