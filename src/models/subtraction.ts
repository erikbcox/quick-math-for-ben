import { IProblem } from "./problem";

export class SubtractionProblem implements IProblem {
    number1: number;
    number2: number;
    opperand: string;
    answer() {
        return this.number1 - this.number2;
    }
    constructor(number1: number, number2: number) {
        this.number1 = number1;
        this.number2 = number2;
        this.opperand = "-";
    }
}

export class SubtractionProblemGenerator {
    high: number;
    low: number;
    _set?: SubtractionProblem[];
    constructor(high: number, low: number) {
        this.high = high;
        this.low = low;
        this._set = undefined;
    }

    _getSet = () => {
        if (this._set === null || this._set === undefined) {
            this._set = this._getAllProblems(this.low, this.high);
        }
        return this._set;
    }

    _getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    _getAllProblems = (min: number, max: number) => {
        const problems = [];
        let minuendCounter = max;
        let subtrahendCounter = min;
        while (minuendCounter >= min && minuendCounter >= 0) {
            subtrahendCounter = minuendCounter;
            while (subtrahendCounter >= min && subtrahendCounter >= 0) {
                problems.push(new SubtractionProblem(minuendCounter, subtrahendCounter))
                subtrahendCounter--;
            }
            minuendCounter--;
        }
        return problems;
    }

    getProblems(count: number) {
        const set = this._getSet();
        const problems = [];
        const min = 0;
        const max = set.length;
        while (problems.length < count) {
            problems.push(set[this._getRandomInt(min, max)])
        }
        return problems;
    }
}
