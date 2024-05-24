import { Rotor } from "./EnigmaLogic/Rotors.js";
import { Reflector } from "./EnigmaLogic/Reflector.js";
import { Keyboard } from "./EnigmaLogic/Keyboard.js";
import { Plugboard } from "./EnigmaLogic/Plugboard.js";

import { Shifter } from "./Utilities/shifterAction.js";
import { Statics } from "./Utilities/statics.js"


function main() {
    // On récupère l'input qui contien le texte a chiffrer
    let to_encode = document.getElementById("text").value.toUpperCase();
    let encrypted = "";

    // On initialise le keyboard, le plugboard et les différentes rotors
    let keyboard = new Keyboard();
    let plugboard = new Plugboard([]);

    let [rotor1, rotor2, rotor3] = [
        new Rotor(Statics.rotors[0], Statics.notch[0]),
        new Rotor(Statics.rotors[1], Statics.notch[1]),
        new Rotor(Statics.rotors[2], Statics.notch[2]),
    ];

    // On force la position à 1 par défaut
    rotor1.set_position("A");
    rotor2.set_position("A");
    rotor3.set_position("A");

    let reflector = new Reflector(Statics.reflectors['B']);

    to_encode.split("").forEach(character => {
        if (! /[A-Z]/.test(character)) {
            encrypted += character;
            return;
        }
        
        // Decide what rotor to shift
        Shifter.shift(rotor1, rotor2, rotor3);


        let signal = keyboard.forward(character);
        signal = plugboard.forward(signal);

        signal = rotor3.forward(signal);
        signal = rotor2.forward(signal);
        signal = rotor1.forward(signal);

        signal = reflector.reflect(signal);

        signal = rotor1.backward(signal);
        signal = rotor2.backward(signal);
        signal = rotor3.backward(signal);

        signal = plugboard.backward(signal);

        encrypted += keyboard.backward(signal);
        // console.log("Rotor 3 ");
        // rotor3.show();
        // console.log("Rotor 2 ");
        // rotor2.show();
        // console.log("Rotor 1 ");
        // rotor1.show();
    });
    console.log(encrypted);
    document.getElementById("scrambled").innerHTML = encrypted;
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", main);
});
