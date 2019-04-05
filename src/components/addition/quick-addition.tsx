import React, { MouseEvent, SFC } from 'react';
import { IonCol, IonContent, IonHeader, IonGrid, IonTitle, IonToolbar, IonRow, IonBackButton, IonButtons, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';

const QuickAdditionPage: SFC<any> = ({ }) => (
    <>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <Link to={`/`}><IonIcon slot="start" name="arrow-round-back" /></Link>
                </IonButtons>
                <IonTitle>Quick Addition</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol offset="3" >5</IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </>
)


export default QuickAdditionPage;