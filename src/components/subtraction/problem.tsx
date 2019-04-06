import React, { SFC } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { SubtractionProblem } from '../../models/subtraction';


type Props = {
    problem: SubtractionProblem,
    answer?: number
}

const ProblemView: SFC<Props> = ({ problem, answer }) => (<IonGrid>
    <IonRow style={{ height: "100%" }}>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#178AFC' }}>{problem.minuend}</div> </IonCol>
        <IonCol size="1" ><div style={{ fontSize: 40, textAlign: "center" }}>-</div> </IonCol>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#F21439' }}>{problem.subtrahend}</div> </IonCol>
        <IonCol size="1" ><div style={{ fontSize: 40, textAlign: "center" }}>=</div> </IonCol>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#4FB60F' }}>{answer !== null && answer !== undefined  ? answer: "?"}</div> </IonCol>
    </IonRow>
</IonGrid>
)

export default ProblemView;