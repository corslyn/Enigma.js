import { Statics } from "../Utilities/statics.js";

export class Keyboard {

    forward(letter) {
        return Statics.letters.indexOf(letter);
    }

    backward(index) {
        return Statics.letters[index];
    }
}