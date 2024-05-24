export class Reflector {
    constructor(wiring) {
        this.normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";;
        this.wiring = wiring;
    }

    forward(letter) {
        let scrambled_letter = this.wiring[
                                        this.normal[letter]
                                ];

        return this.normal.indexOf(scrambled_letter);
    }

}

// BABWIN