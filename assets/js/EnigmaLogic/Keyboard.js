export class Keyboard {
    forward(letter) {
        index = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter);
        return index;
    }

    backward(index) {
        letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index];
        return letter;
    }
}