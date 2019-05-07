export class ProblemResult<T extends IProblem>{
    problem: T;
    answer?: number;
    correctFirstTry: boolean = false;
    isCorrect = () => this.problem.answer() === this.answer
    constructor(problem: T) {
        this.problem = problem;
    }
}

export interface IProblem {
    number1: number;
    number2: number;
    userAnswer?: number;
    opperand: string;
    answer: () => number;
}