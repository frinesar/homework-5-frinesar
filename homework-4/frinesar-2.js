class Vector{
    constructor(vector){
        this.vector = vector;
    }

    get length(){
        return this.vector.length;
    }
    
    set length(value){
        throw TypeError('Can not change the length value');
    }


    add(other){
        if (other instanceof Vector && other.length === this.vector.length){
            return this.vector.map((value, index) => value + other.vector[index]);
        }
        else {
            throw Error;
        }
    }

    substract(other){
        if (other instanceof Vector && other.length === this.vector.length){
            return this.vector.map((value, index) => value - other.vector[index]);
        }
        else {
            throw Error;
        }
    }

    dot(other){
        if (other instanceof Vector && other.length === this.vector.length){
            return this.vector.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue * other.vector[currentIndex], 0);
        }
        else {
            throw Error;
        }
    }
    
    norm(){
        return this.vector.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0) ** 0.5;
    }
}


let vectorA = new Vector([1,2,3]);
let vectorB = new Vector([3,4,5]);

console.log(vectorA.add(vectorB));
console.log(vectorA.substract(vectorB));
console.log(vectorA.dot(vectorB));
console.log(vectorA.norm());

console.log(vectorA.add(new Vector([6,7,8,9])));
