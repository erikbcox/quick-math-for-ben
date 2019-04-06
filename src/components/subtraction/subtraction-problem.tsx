import React, { SFC } from 'react';
import { IonContent } from '@ionic/react';
import ProblemView from './problem';
import InputBox from './InputBox';
import { SubtractionProblem } from '../../models/subtraction';

type Props = {
    answer?: number,
    problem: SubtractionProblem,
    readonly onAddValueToAnswer: (value: number) => void;
    readonly onDeleteValueFromAnswer: () => void;
}

const SubtractionProblemControl: SFC<Props> = ({ answer, problem, onAddValueToAnswer, onDeleteValueFromAnswer }) => (
    <IonContent>
        <ProblemView problem={problem} answer={answer} />
        <InputBox onDeleteClick={onDeleteValueFromAnswer} onNumberClick={onAddValueToAnswer} />
    </IonContent>
)


export default SubtractionProblemControl;