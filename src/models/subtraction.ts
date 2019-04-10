import ProblemView from "../components/subtraction/problem";

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

export class SubtractionProblemResult{
    problem: SubtractionProblem;    
    answer?: number;
    correctFirstTry:boolean = false;    
    isCorrect = () => this.problem.difference() === this.answer
    constructor(problem: SubtractionProblem) {
        this.problem = problem;
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
        if(this._set === null || this._set === undefined){
            this._set = this._getAllProblems(this.low,this.high);
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

    getNext() {
        const minuend = this._getRandomInt(this.low, this.high)
        const subtrahend = this._getRandomInt(this.low, (minuend > 0 ? minuend - 1 : minuend));
        return new SubtractionProblem(minuend, subtrahend);
    }

    getProblems(count: number) {
        const set = this._getSet();
        const problems = [];
        const min = 0;
        const max = set.length;
        while (problems.length < count) {
            problems.push(set[this._getRandomInt(min,max)])
        }
        return problems;
    }
}

