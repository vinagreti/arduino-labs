#ifndef Fader_h
#define Fader_h

    #if ARDUINO >= 100
        #include "Arduino.h"
    #else
        #include "WProgram.h"
        #include "pins_arduino.h"
        #include "WConstants.h"
    #endif

    class Fader
    {
    public:
      Fader(int button, int led, int initial = 0);

      void init();
      void check();
      void toggle();

    private:
      unsigned int _button;
      unsigned int _led;
      int _initial = 0;
      bool _buttonPressed = false;
    };

#endif
