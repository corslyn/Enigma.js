// Represents an Enigma machine
// 3 or 4 rotors, 1 reflector, max 10 plugboard permutations, 1 keyboard

export class Enigma {
    constructor(reflector, rotor1, rotor2, rotor3, plugboard, keyboard) {
        this.reflector = reflector;
        this.rotor1 = rotor1;
        this.rotor2 = rotor2;
        this.rotor3 = rotor3;
        this.plugboard = plugboard;
        this.keyboard = keyboard;
    }

    encode(character) {

        let signal = this.keyboard.forward(character);

        signal = this.plugboard.forward(signal);

        signal = this.rotor3.forward(signal);
        signal = this.rotor2.forward(signal);
        signal = this.rotor1.forward(signal);

        signal = this.reflector.reflect(signal);

        signal = this.rotor1.backward(signal);
        signal = this.rotor2.backward(signal);
        signal = this.rotor3.backward(signal);

        signal = this.plugboard.backward(signal);

        return this.keyboard.backward(signal);
    }

    set_start_position(key) {
        this.rotor1.set_position(key[0]);
        this.rotor2.set_position(key[1]);
        this.rotor3.set_position(key[2]);

    }

    set_ring_settings(ring_settings) {
        this.rotor1.set_ring(ring_settings[0]);
        this.rotor2.set_ring(ring_settings[1]);
        this.rotor3.set_ring(ring_settings[2]);
    }
}