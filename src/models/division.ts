import { IProblem } from "./problem";

export class DivisionProblem implements IProblem {
    number1: number;
    number2: number;
    opperand: string;
    answer() {
        return this.number1 / this.number2;
    }
    constructor(number1: number, number2: number) {
        this.number1 = number1;
        this.number2 = number2;
        this.opperand = "/";
    }
}

export class DivisionProblemGenerator {
    high: number;
    low: number;
    _set?: DivisionProblem[];
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
        let number1Counter = max;
        while (number1Counter >= min && number1Counter >= 0) {
            let number2Counter = max;
            while (number2Counter >= min && number2Counter >= 0) {
                if (number1Counter > 0 && number2Counter > 0) {
                    problems.push(new DivisionProblem(number1Counter * number2Counter, number2Counter))
                }
                number2Counter--;
            }
            number1Counter--;
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

