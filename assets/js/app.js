import { Rotor } from "./EnigmaLogic/Rotors.js";
import { Reflector } from "./EnigmaLogic/Reflector.js";
import { Keyboard } from "./EnigmaLogic/Keyboard.js";
import { Plugboard } from "./EnigmaLogic/Plugboard.js";

import { Shifter } from "./Utilities/shifterAction.js";
import { Statics } from "./Utilities/statics.js"
import { Enigma } from "./Enigma.js";


function main() {
    // On récupère l'input qui contien le texte a chiffrer
    let to_encode = document.getElementById("text").value.toUpperCase();
    let encrypted = "";

    // On initialise le keyboard, le plugboard et les différentes rotors
    let keyboard = new Keyboard();
    let plugboard = new Plugboard(["AR", "GK", "OX"]);

    let [rotor1, rotor2, rotor3] = [
        new Rotor(Statics.rotors[0], Statics.notch[0]),
        new Rotor(Statics.rotors[1], Statics.notch[1]),
        new Rotor(Statics.rotors[2], Statics.notch[2]),
    ];

    let reflector = new Reflector(Statics.reflectors['B']);

    let enigma = new Enigma(reflector, rotor1, rotor2, rotor3, plugboard, keyboard);

    enigma.set_start_position("AAA");
    enigma.set_ring_settings([1, 1, 1]);
    console.log(rotor1.input[0]);
    console.log(rotor2.input[0]);
    console.log(rotor3.input[0]);

    to_encode.split("").forEach(character => {
        if (! /[A-Z]/.test(character)) {
            encrypted += character;
            return;
        }
        // Decide which rotor to shift
        Shifter.shift(rotor1, rotor2, rotor3);
        encrypted += enigma.encode(character);
    });
    console.log(rotor1.input[0]);
    console.log(rotor2.input[0]);
    console.log(rotor3.input[0]);
    document.getElementById("scrambled").innerHTML = encrypted;
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", main);
});
