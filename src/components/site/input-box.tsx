import React, { SFC } from 'react';
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';

type CalculatorItemInputProps = {
    color?: string,
    value: number,
    readonly onValueSelected: (value: number) => void;
}

const CalculatorItemInput: SFC<CalculatorItemInputProps> = ({ value, color, onValueSelected }) => (<IonCol style={{ textAlign: "center" }}>
    <IonButton expand="full" color={color ? color : "primary"} style={{ fontSize: "40" }} onClick={() => onValueSelected(value)}>{value}</IonButton>
</IonCol>);

type InputBoxProps = {
    readonly onNumberClick: (value: number) => void;
    readonly onDeleteClick: () => void;
}

const InputBox: SFC<InputBoxProps> = ({ onNumberClick, onDeleteClick }) => (<IonGrid>
    <IonRow>
        <CalculatorItemInput value={7} onValueSelected={onNumberClick} />
        <CalculatorItemInput value={8} onValueSelected={onNumberClick} />
        <CalculatorItemInput value={9} onValueSelected={onNumberClick} />
    </IonRow>
    <IonRow>
        <CalculatorItemInput value={4} onValueSelected={onNumberClick} />
        <CalculatorItemInput value={5} onValueSelected={onNumberClick} />
        <CalculatorItemInput value={6} onValueSelected={onNumberClick} />
    </IonRow>
    <IonRow>
        <CalculatorItemInput value={1} onValueSelected={onNumberClick} />
        <CalculatorItemInput value={2} onValueSelected={onNumberClick} />
        <CalculatorItemInput value={3} onValueSelected={onNumberClick} />
    </IonRow>
    <IonRow>
        <CalculatorItemInput value={0} onValueSelected={onNumberClick} />
        <IonCol style={{ textAlign: "center" }}>
            <IonButton color="medium" expand="full" style={{ fontSize: "40" }}>
                .</IonButton>
        </IonCol>
        <IonCol style={{ textAlign: "center" }}>
            <IonButton color="medium" expand="full" style={{ fontSize: "40" }} onClick={onDeleteClick}>
                <IonIcon name="backspace" /></IonButton>
        </IonCol></IonRow>
</IonGrid>
)

export default InputBox;