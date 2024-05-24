import { Statics } from "../Utilities/statics.js";

export class Rotor {
    /**
     * Constructeur permettant de construire un rotor
     * 
     * @param wiring
     */
    constructor(wiring, notch) {
        /**
         * Cablage du rotor:
         * Si le cablage est : "EKMFLGDQVZNTOWYHXUSPAIBRCJ"
         * Si la lettre à encoder est A, la lettre de sortie sera E
         */
        this.input = Statics.letters;
        this.output = wiring;

        // Walze : 8 rotors disponibles pour M3/M4, 5 rotors pour I
        // Die Ringstellung: À quelle lettre il va rotater 0 = A, 25 = Z
        this.notch = notch;

        // this.ring_setting = ring_setting;

        // Grundstellung: position de départ du rotor 0 = A, 25 = Z
        // this.position = 0;

    }

    forward(index) {
        let letter = this.output[index];
        return this.input.indexOf(letter);
    }

    backward(index) {
        let letter = this.input[index];
        return this.output.indexOf(letter);
    }

    shift(starting_position = 0) {
        for (let i = 0; i < starting_position+1; i++) {
            this.input = this.input.slice(1) + this.input[0];
            this.output = this.output.slice(1) + this.output[0];
        }

    }

    show() {
        //console.log(this.input);
        console.log(this.output);
    }

    set_position(letter) {
        this.input = this.input.slice(this.input.indexOf(letter)) + this.input.slice(0, this.input.indexOf(letter))
        this.output = this.output.slice(this.input.indexOf(letter)) + this.output.slice(0, this.input.indexOf(letter))
    }

    

    at_notch() {
        // Is the rotor at notch position ?
        // let current_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[this.position];
        // return this.notch.includes(current_letter);
        return (this.output[0] === this.notch)
    }
}