import React, { SFC } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IProblem } from '../../models/problem';


type Props = {
    problem: IProblem,
    opperand: string,
    answer?: number
}

const ProblemView: SFC<Props> = ({ answer,opperand, problem }) => (<IonGrid>
    <IonRow style={{ height: "100%" }}>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#178AFC' }}>{problem.number1}</div> </IonCol>
        <IonCol size="1" ><div style={{ fontSize: 40, textAlign: "center" }}>{opperand}</div> </IonCol>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#F21439' }}>{problem.number2}</div> </IonCol>
        <IonCol size="1" ><div style={{ fontSize: 40, textAlign: "center" }}>=</div> </IonCol>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#4FB60F' }}>{answer !== null && answer !== undefined  ? answer: "?"}</div> </IonCol>
    </IonRow>
</IonGrid>
)

export default ProblemView;