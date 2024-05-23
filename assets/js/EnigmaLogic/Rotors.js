export class Rotor {

    normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /**
     * Constructeur permettant de construire un rotor
     * 
     * @param wiring
     */
    constructor(wiring, notch, rotor_number, ringSetting = 0) {
        /**
         * Cablage du rotor:
         * Si le cablage est : "EKMFLGDQVZNTOWYHXUSPAIBRCJ"
         * Si la lettre à encoder est A, la lettre de sortie sera E
         */
        this.wiring = wiring;

        // Walze : 8 rotors disponibles pour M3/M4, 5 rotors pour I
        this.rotor_number = rotor_number;
        // remontre l'erreur
        // Die Ringstellung: À quelle lettre il va rotater 0 = A, 25 = Z
        this.notch = notch;

        this.ringSetting = ringSetting;

        // Grundstellung: position de départ du rotor 0 = A, 25 = Z
        this.position = 0;

    }

    forward(letter) {
        // Plugboard -> Rotors -> Reflector
        // Get normal index
        let inputIndex = (this.normal.indexOf(letter) + this.position - this.ringSetting + 26) % 26;
        // Get scrambled letter from index
        let scrambled_letter = this.wiring[inputIndex];
        let outputIndex = (this.normal.indexOf(scrambled_letter) - this.position + this.ringSetting + 26) % 26;

        return outputIndex;

    }

    backward(letter) {
        // Reflector -> Rotors -> Plugboard
        let inputIndex = (this.normal.indexOf(letter) + this.position - this.ringSetting + 26) % 26;

        let scrambled_index = this.wiring.indexOf(this.normal[inputIndex]);
        let outputIndex = (scrambled_index - this.position + this.ringSetting + 26) % 26;

        return outputIndex;
    }

    shift() {
        this.position = (this.position + 1) % 26;
        // if (this.rotor_number === 1 || (this.rotor_number > 1 && this.notch == this.wiring[0]))
        // this.wiring = this.wiring.slice(1) + this.wiring[0];
    }

    at_notch() {
        // Is the rotor at notch position ?
        let currentLetter = this.normal[this.position];
        if (this.notch.includes(currentLetter)) {
            return true;
        } else {
            return false;
        }
    }

    set_position(pos) {
        this.position = pos % 26;
    }
}