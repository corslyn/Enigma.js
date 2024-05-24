// Usage : new Plugboard(["AB", "CD", "EF"]);
// -> BADCFEGHIJKLMNOPQRSTUVWXYZ

export class Plugboard {
    constructor(pairs) {
        this.input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.output = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        pairs.forEach(pair => {
            let input_letter = pair[0];
            let output_letter = pair[1];
            let index_of_input_letter = this.input.indexOf(input_letter);
            let index_of_output_letter = this.input.indexOf(output_letter);
            this.input = this.input.slice(0, index_of_input_letter) + output_letter + this.output.slice(index_of_input_letter + 1);
            this.input = this.input.slice(0, index_of_output_letter) + input_letter + this.output.slice(index_of_output_letter + 1);
        });
    }

    forward(index) {
        let letter = this.output[index];
        let index_with_plugboard = this.input.indexOf(letter);
        return index_with_plugboard;
    }
    backward(index) {
        let letter = this.input[index];
        let index_with_plugboard = this.output.indexOf(letter);
        return index_with_plugboard;
    }
}