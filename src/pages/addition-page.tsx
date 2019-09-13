import React, { FC, useState, useReducer, useEffect } from 'react';

import "./problem-page.css";

import ReactGA from "react-ga";
import ProblemHeader from '../components/site/ProblemHeader';
import { AdditionProblemGenerator, AdditionProblem } from '../models/addition';
import { ProblemResult } from '../models/problem';
import ProblemControl from '../components/site/problem-control';
import ProblemInputControls from '../components/site/problem-input-controls';
import ProblemsComplete from '../components/site/problems-complete';
import { IonFooter, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';


const generator = new AdditionProblemGenerator(10, 0);
const getResults = (set: AdditionProblem[]) => {
    let i = 0;
    const results = [];
    while (i < set.length) {
        results.push(new ProblemResult(set[i]))
        i++;
    }
    return results;
}

const QuickAdditionPage: FC<object> = ({ }) => {
    useEffect(() => {
        ReactGA.pageview("/addition");
    }, []);
    const [results, setResults] = useState<ProblemResult<AdditionProblem>[]>(getResults(generator.getProblems(10)));
    const [activeProblemIndex, problemDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "NEXT":
                return state + 1;
            case "PREV":
                return state - 1;
            case "RESET":
                return 0;
            default:
                return state;
        }
    }, 0);

    const [showResults, setShowResults] = useState(false);

    const onResetProblemSet = () => {
        setResults(getResults(generator.getProblems(10)));
        problemDispatch({ type: "RESET" });
        setShowResults(false)
    }

    const getActiveResult = () => {
        return results[activeProblemIndex];
    }

    const updateActiveProblemAnswer = (answer?: number) => {
        const updatedResult = results[activeProblemIndex];
        updatedResult.answer = answer;

        setResults([
            ...results.slice(0, activeProblemIndex),
            updatedResult,
            ...results.slice(activeProblemIndex + 1, results.length)
        ]);
    }

    const updateActiveProblemResult = (correctFirstTry: boolean) => {
        const updatedResult = results[activeProblemIndex];
        updatedResult.correctFirstTry = correctFirstTry;

        setResults([
            ...results.slice(0, activeProblemIndex),
            updatedResult,
            ...results.slice(activeProblemIndex + 1, results.length)
        ]);
    }

    return (<>
        <ProblemHeader title="Quick Addition" />

        {!showResults && <>
            <IonContent>
                <ProblemControl
                    opperand="+"
                    problem={getActiveResult().problem}
                    answer={getActiveResult().answer}
                    onDeleteValueFromAnswer={() => {
                        const activeAnswer = getActiveResult().answer;
                        if (activeAnswer === undefined) {
                            return
                        } else {
                            const answer = activeAnswer || 0;
                            const updatedAnswerAsString = answer.toString().substr(0, answer.toString().length - 1)
                            updateActiveProblemAnswer(+updatedAnswerAsString)
                        }
                    }}
                    onAddValueToAnswer={(value: number) => {
                        const activeAnswer = getActiveResult().answer;
                        if (activeAnswer === undefined || activeAnswer === null) {
                            updateActiveProblemAnswer(value);
                        } else {
                            const updatedAnswerAsString = `${activeAnswer}${value}`;
                            updateActiveProblemAnswer(+updatedAnswerAsString)
                        }
                    }} />

            </IonContent>
            <IonFooter>
                <ProblemInputControls
                    isAnswerEmpty={getActiveResult() ? getActiveResult().answer === undefined : true}
                    isAnswerCorrect={getActiveResult() ? getActiveResult().isCorrect() : false}
                    totalProblemCount={results.length}
                    activeProblemIndex={activeProblemIndex}
                    isLastProblem={activeProblemIndex === (results.length - 1)}
                    onGoToNext={(correctFirstTry: boolean) => {
                        updateActiveProblemResult(correctFirstTry);
                        problemDispatch({ type: "NEXT" });
                    }}
                    onGoToDone={(correctFirstTry: boolean) => {
                        updateActiveProblemResult(correctFirstTry);
                        setShowResults(true);
                    }}
                    onResetAnswer={() => updateActiveProblemAnswer(undefined)} />
            </IonFooter></>}
        {showResults && <ProblemsComplete onResetProblemSet={() => onResetProblemSet()} totalCorrect={results.filter(r => r.correctFirstTry).length} totalProblems={results.length} />}
    </>
    )
}

export default QuickAdditionPage;