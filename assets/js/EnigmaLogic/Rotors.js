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
        this.notch = notch;
    }

    forward(index) {
        let letter = this.output[index];
        return this.input.indexOf(letter);
    }

    backward(index) {
        let letter = this.input[index];
        return this.output.indexOf(letter);
    }

    shift(starting_position = 1, forward = true) {
        for (let i = 0; i < starting_position; i++) {
            if (forward) {
                this.input = this.input.slice(1) + this.input[0];
                this.output = this.output.slice(1) + this.output[0];
            } else {
                this.input = this.input[25] + this.input.slice(0, 24);
                this.output = this.output[25] + this.output.slice(0, 24);
            }

        }

    }

    show() {
        //console.log(this.input);
        console.log(this.output);
    }

    set_position(letter) {
        this.shift(this.input.indexOf(letter));
    }

    at_notch() {
        // Is the rotor at notch position ?
        // let current_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[this.position];
        // return this.notch.includes(current_letter);
        console.log("Rotor notch = " + this.notch);
        return (this.input[0] === this.notch);
    }

    set_ring(pos) {
        this.shift(pos - 1, false);
        let pos_notch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(this.notch);
        this.notch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[(pos_notch - pos + 1) % 26];
    }
}