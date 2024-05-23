export class Reflector {
    constructor(wiring) {
        this.normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";;
        this.wiring = wiring;
    }

    forward(letter) {
        // Plugboard -> Rotors -> Reflector
        // Get normal index
        let input_letter = this.normal[letter];        // Get scrambled letter from index
        let scrambled_letter = this.wiring[input_letter];
        // et donc toi tu veux quoi ? un nomb
        return this.normal.indexOf(scrambled_letter);
    }

}

// BABWIN