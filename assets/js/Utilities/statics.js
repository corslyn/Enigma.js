export class Statics {
    static rotors = [
        "EKMFLGDQVZNTOWYHXUSPAIBRCJ", // Enigma I
        "AJDKSIRUXBLHWTMCQGZNPYFVOE", // Enigma I
        "BDFHJLCPRTXVZNYEIWGAKMUSQO", // Enigma I
        //"ESOVPZJAYQUIRHXLNFTGKDCMWB", // Enigma M3
        //"VZBRGITYUPSDNHLXAWMJQOFECK", // Enigma M3
        //"JPGVOUMFYQBENHZRDKASXLICTW", // Enigma M4
        //"NZJHGRCXMYSWBOUFAIVLPEKQDT", // Enigma M4
        //"FKQHTLXOCBJSPDZRAMEWNIUYGV", // Enigma M4 



    ]

    static notch = [
        'Q', // Si on passe de Q à R, le rotor suivant tourne
        'E', // Si on passe de E à F, le rotor suivant tourne
        'V', // Si on passe de V à W, le rotor suivant tourne
        'J', // Si on passe de J à K, le rotor suivant tourne
        'Z', // Si on passe de Z à A, le rotor suivant tourne
        // 6: 'ZM', // Si on passe de Z à A ou de M à N, le rotor suivant tourne
        // 7: 'ZM',
        // 8: 'ZM',
    ]

    static reflectors = {
        "A": "EJMZALYXVBWFCRQUONTSPIKHGD",
        "B": "YRUHQSLDPXNGOKMIEBFZCWVJAT",
        "C": "FVPJIAOYEDRZXWGCTKUQSBNMHL",
        // "beta":   "LEYJVCNIXWPBQMDRTAKZGFUHOS", // Enigma M4
        // "gamma":  "FSOKANUERHMBTIYCWLQPZXVGJD", // Enigma M4
        // "B_thin": "ENKQAUYWJICOPBLMDXZVFTHRGS", // Enigma M4
        // "C_thin": "RDOBJNTKVEHMLFCWZAXGYIPSUQ", // Enigma M4
        // "ETW":    "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Enigma I
    }

    static letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
