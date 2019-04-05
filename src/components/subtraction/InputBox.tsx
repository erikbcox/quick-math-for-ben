import React, { SFC } from 'react';
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';

type CalculatorItemInputProps = {
    color?: string,
    value: number,
}

const CalculatorItemInput: SFC<CalculatorItemInputProps> = ({ value, color }) => (<IonCol style={{ textAlign: "center" }}>
    <IonButton expand="full" color={color ? color : "primary"} style={{ fontSize: "40" }}>{value}</IonButton>
</IonCol>);

const InputBox: SFC<any> = ({ }) => (<IonGrid>
    <IonRow>
        <CalculatorItemInput value={7} />
        <CalculatorItemInput value={8} />
        <CalculatorItemInput value={9} />
    </IonRow>
    <IonRow>
        <CalculatorItemInput value={4} />
        <CalculatorItemInput value={5} />
        <CalculatorItemInput value={6} />
    </IonRow>
    <IonRow>
        <CalculatorItemInput value={1} />
        <CalculatorItemInput value={2} />
        <CalculatorItemInput value={3} />
    </IonRow>
    <IonRow>
        <CalculatorItemInput value={0} />
        <IonCol style={{ textAlign: "center" }}>
            <IonButton color="medium" expand="full" style={{ fontSize: "40" }}>
                .</IonButton>
        </IonCol>
        <IonCol style={{ textAlign: "center" }}>
            <IonButton color="medium" expand="full" style={{ fontSize: "40" }}>
                <IonIcon name="backspace" /></IonButton>
        </IonCol></IonRow>
</IonGrid>
)

export default InputBox;