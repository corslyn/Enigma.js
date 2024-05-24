export class Shifter {
    static shift (rotor1, rotor2, rotor3) {
        if (rotor2.at_notch()) {
            rotor1.shift();
            rotor2.shift();
        } else if (rotor3.at_notch()) {
            rotor2.shift();
        }
        rotor3.shift();
    }
}