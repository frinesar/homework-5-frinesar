class VigenereCipher{
    constructor (key, alphabet){
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(string){ 
        let result = [];
        for (let i = 0; i < string.length; i++){
            if (this.alphabet.includes(string.charAt(i))){
                let temp = (this.alphabet.indexOf(string.charAt(i)) + this.alphabet.indexOf(this.key.charAt(i % this.key.length))) % this.alphabet.length;
                result.push(this.alphabet.charAt(temp));
            }
            else {
                result.push(string.charAt(i));
            }
        }
        return result.join('');
    }
    
    decode(string){
        let result = [];
        for (let i = 0; i < string.length; i++){
            if (this.alphabet.includes(string.charAt(i))){
                let temp = this.alphabet.indexOf(string.charAt(i)) - this.alphabet.indexOf(this.key.charAt(i % this.key.length));
                if (temp < 0){
                    result.push(this.alphabet.charAt(this.alphabet.length + temp));
                }
                else {
                    result.push(this.alphabet.charAt(temp));
                } 
            }
            else {
                result.push(string.charAt(i));
            }
        }
        return result.join('');
    }    
}


let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = 'password';
let c = new VigenereCipher(key, alphabet);

console.log(c.encode('codewars'));
console.log(c.encode('it\'s a shift cipher!'));
console.log(c.encode('22xws'));
console.log(c.decode(c.encode('22xws')));
