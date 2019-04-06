export class SubtractionProblem {
    minuend: number;
    subtrahend: number;
    difference() {
        return this.minuend - this.subtrahend;
    }
    constructor(minuend: number, subtrahend: number) {
        this.minuend = minuend;
        this.subtrahend = subtrahend;
    }

}
const getRandomInt = Symbol();
export class SubtractionProblemGenerator {
    high: number;
    low: number;
    constructor(high: number, low: number) {
        this.high = high;
        this.low = low;
    }

    _getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getNext() {
        const minuend = this._getRandomInt(this.low, this.high)
        const subtrahend = this._getRandomInt( this.low, (minuend > 0 ? minuend -1: minuend));
        return new SubtractionProblem(minuend, subtrahend);
    }
}

