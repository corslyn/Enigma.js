import { Statics } from "../Utilities/statics.js";

export class Reflector {

    constructor(wiring) {
        /**
         * Cablage du réflecteur:
         * Si le cablage est : "EKMFLGDQVZNTOWYHXUSPAIBRCJ"
         * Si la lettre à encoder est A, la lettre de sortie sera E
         */
        this.input = Statics.letters;
        this.output = wiring;
    }

    reflect(index) {
        let letter = this.output[index];
        let index_with_rotor = this.input.indexOf(letter);
        return index_with_rotor;
    }
}