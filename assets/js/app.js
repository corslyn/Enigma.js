import { Rotor } from "./EnigmaLogic/Rotors.js";
import { Reflector } from "./EnigmaLogic/Reflector.js";
import { Keyboard } from "./EnigmaLogic/Keyboard.js";
import { rotors, reflectors, notch, letters } from "./EnigmaLogic/statics.js";
import { Plugboard } from "./EnigmaLogic/Plugboard.js";

function main() {
    let to_encode = document.getElementById("text").value;
    let encrypted = "";

    let keyboard = new Keyboard();
    let plugboard = new Plugboard([]);

    // Rotor définition
    let [rotor1, rotor2, rotor3] = [
        new Rotor("EKMFLGDQVZNTOWYHXUSPAIBRCJ", "Q"),
        new Rotor("AJDKSIRUXBLHWTMCQGZNPYFVOE", "E"),
        new Rotor("BDFHJLCPRTXVZNYEIWGAKMUSQO", "V"),
    ];

    // Reflector définition
    let reflector = new Reflector(reflectors['B']);

    to_encode.split("").forEach((character, index) => {

        if (rotor2.at_notch() && rotor3.at_notch()) {
            rotor1.shift();
            rotor2.shift();
            rotor3.shift();
        } else if (rotor2.at_notch()) {
            rotor1.shift();
            rotor2.shift();
            rotor3.shift();
        } else if (rotor3.at_notch()) {
            rotor2.shift();
            rotor3.shift();
        } else {
            rotor3.shift();
        }

        let signal = keyboard.forward(character);
        signal = plugboard.forward(signal);

        // First pass from plugboard to rotors
        signal = rotor3.forward(signal);

        signal = rotor2.forward(signal);

        signal = rotor1.forward(signal);


        // Pass through reflector

        signal = reflector.reflect(signal);

        // Second pass from rotors to plugboard

        signal = rotor1.backward(signal);

        signal = rotor2.backward(signal);

        signal = rotor3.backward(signal);

        signal = plugboard.backward(signal);

        let encoded_letter = keyboard.backward(signal);
        encrypted += encoded_letter;




        //     let character_index = letters.indexOf(character);

        //     console.log("[TOUR]", ++i, ", nous travaillons avec la lettre: " + character + "At notch = " + rotor1.at_notch() + "index :" + index);



        //     let scrambled_letter = rotor1.forward(character_index);
        //     scrambled_letter = rotor2.forward(scrambled_letter);
        //     scrambled_letter = rotor3.forward(scrambled_letter);

        //     scrambled_letter = reflector.forward(scrambled_letter);

        //     scrambled_letter = rotor3.backward(scrambled_letter);
        //     scrambled_letter = rotor2.backward(scrambled_letter);
        //     scrambled_letter = rotor1.backward(scrambled_letter);


        //     encrypted += letters[scrambled_letter];

    });
    console.log(encrypted);
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", main);
});
