import React, { FC } from 'react';
import { IonContent } from '@ionic/react';
import ProblemView from './problem-view';
import InputBox from './input-box';
import { IProblem } from '../../models/problem';

type Props = {
    answer?: number,
    opperand: string,
    problem: IProblem,
    readonly onAddValueToAnswer: (value: number) => void;
    readonly onDeleteValueFromAnswer: () => void;
}

const ProblemControl: FC<Props> = ({ answer, problem, onAddValueToAnswer, onDeleteValueFromAnswer, opperand }) => {
    return (<IonContent>
        <ProblemView problem={problem} answer={answer} opperand={opperand} />
        <InputBox onDeleteClick={onDeleteValueFromAnswer} onNumberClick={onAddValueToAnswer} />
    </IonContent>)
}


export default ProblemControl;