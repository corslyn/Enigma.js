import { Rotor } from "./EnigmaLogic/Rotors.js";
import { Reflector } from "./EnigmaLogic/Reflector.js";
import { rotors, reflectors, notch, letters } from "./EnigmaLogic/statics.js";

function main() {
    console.clear();
    let rotor1 = new Rotor(rotors[0], notch[0], 1);
    let rotor2 = new Rotor(rotors[1], notch[1], 2);
    let rotor3 = new Rotor(rotors[2], notch[2], 3);

    let reflector = new Reflector(reflectors['B']);

    rotor1.set_position(0);
    rotor2.set_position(0);
    rotor3.set_position(0);

    let to_encode = document.getElementById("text").value;
    let encrypted = "";

    let i = -1;
    to_encode.split("").forEach((character) => {
        rotor1.shift();

        console.log("[TOUR] ", ++i, ", nous travaillons avec la lettre: " + character);
        
        
        let scrambled_letter = rotor1.forward(character);
        console.log(scrambled_letter);

        scrambled_letter = rotor2.forward(scrambled_letter);
        console.log(scrambled_letter);
    
        scrambled_letter = rotor3.forward(scrambled_letter);
        console.log(scrambled_letter);
        
        console.log("Je vais reflect")
        scrambled_letter = reflector.forward(scrambled_letter);
        console.log("Je viens de reflect")
        
        scrambled_letter = rotor3.backward(scrambled_letter);
        console.log(scrambled_letter);
        
        scrambled_letter = rotor2.backward(scrambled_letter);
        console.log(scrambled_letter);
        
        scrambled_letter = rotor1.backward(scrambled_letter);
        console.log(scrambled_letter);
        
        
        
        encrypted += letters[scrambled_letter];
    });
    console.log("AFFICHAGE FINAL");
    console.log(encrypted);
}




window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", main);
});
