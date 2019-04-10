import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon, IonHeader, IonToolbar, IonButtons, IonTitle, IonText, IonContent } from '@ionic/react';
import SubtractionConfirmationControl from '../components/subtraction/confirmation/subtraction-confirmation';

const QuickSubtractionCompletePage: SFC<any> = ({ }) => (<><IonHeader color="primary">
    <IonToolbar>
        <IonButtons slot="start">
            <Link to={`/`}><IonIcon slot="start" name="arrow-round-back" /></Link>
        </IonButtons>
        <IonTitle>Quick Subtraction Complete</IonTitle>
    </IonToolbar>
</IonHeader>
    <SubtractionConfirmationControl totalCorrect={13} totalProblems={20} /></>
)



export default QuickSubtractionCompletePage;