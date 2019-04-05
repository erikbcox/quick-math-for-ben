import React, { SFC } from 'react';
import { IonButton, IonToolbar, IonFooter, IonRippleEffect } from '@ionic/react';
import SubtractionHeader from '../components/subtraction/header';
import SubtractionProblemControl from '../components/subtraction/subtraction-problem';

const QuickSubtractionPage: SFC<any> = ({ }) => (
    <>
        <SubtractionHeader />
        <SubtractionProblemControl />
        <IonFooter>
            <IonToolbar >
                <IonButton color="success" expand="full" style={{ fontSize: "2em" }}><IonRippleEffect /> CHECK ANSWER</IonButton>
            </IonToolbar>
        </IonFooter>
    </>
)

export default QuickSubtractionPage;