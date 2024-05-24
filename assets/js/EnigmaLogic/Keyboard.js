export class Keyboard {
    forward(letter) {
        let index = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter);
        return index;
    }

    backward(index) {
        let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index];
        return letter;
    }
}