export const rotors = [
    "EKMFLGDQVZNTOWYHXUSPAIBRCJ", // Enigma I
    "AJDKSIRUXBLHWTMCQGZNPYFVOE", // Enigma I
    "BDFHJLCPRTXVZNYEIWGAKMUSQO", // Enigma I
    //"ESOVPZJAYQUIRHXLNFTGKDCMWB", // Enigma M3
    //"VZBRGITYUPSDNHLXAWMJQOFECK", // Enigma M3
    //"JPGVOUMFYQBENHZRDKASXLICTW", // Enigma M4
    //"NZJHGRCXMYSWBOUFAIVLPEKQDT", // Enigma M4
    //"FKQHTLXOCBJSPDZRAMEWNIUYGV", // Enigma M4 
]

export const reflectors = {
    "A":      "EJMZALYXVBWFCRQUONTSPIKHGD",
    "B":      "YRUHQSLDPXNGOKMIEBFZCWVJAT",
    "C":      "FVPJIAOYEDRZXWGCTKUQSBNMHL", 
    // beta:   "LEYJVCNIXWPBQMDRTAKZGFUHOS", // Enigma M4
    // gamma:  "FSOKANUERHMBTIYCWLQPZXVGJD", // Enigma M4
    // B_thin: "ENKQAUYWJICOPBLMDXZVFTHRGS", // Enigma M4
    // C_thin: "RDOBJNTKVEHMLFCWZAXGYIPSUQ", // Enigma M4
    // ETW:    "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Enigma I
}

export const notch = {
    1: 'Q', // Si on passe de Q à R, le rotor suivant tourne
    2: 'E', // Si on passe de E à F, le rotor suivant tourne
    3: 'V', // Si on passe de V à W, le rotor suivant tourne
    4: 'J', // Si on passe de J à K, le rotor suivant tourne
    5: 'Z', // Si on passe de Z à A, le rotor suivant tourne
    // 6: 'ZM', // Si on passe de Z à A ou de M à N, le rotor suivant tourne
    // 7: 'ZM',
    // 8: 'ZM',
}

export const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
