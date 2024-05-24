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
        this.input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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


    shift(index = 1) {
        for (let i = 0; i<index; i++) {
            this.input = this.input.slice(1) + this.input[0];
            this.output = this.output.slice(1) + this.output[0];
        }
       
    }

    show() {
        console.log(this.input);
        console.log(this.output);
    }

    go_to_position(position) {
        this.shift(this.output.indexOf(position));
    }

    at_notch() {
        // Is the rotor at notch position ?
        //let current_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[this.position];
        // return this.notch.includes(current_letter);

        if (this.output[0] == this.notch) {
            return true;
        }
    }
}