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