import React, { MouseEvent, SFC } from 'react';
import { IonCol, IonContent, IonHeader, IonGrid, IonTitle, IonToolbar, IonRow, IonButtons, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';

const QuickLettersPage: SFC<any> = ({ }) => (
    <><IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <Link to={`/`}><IonIcon slot="start" name="arrow-round-back" /></Link>
            </IonButtons>
            <IonTitle>Quick Letters</IonTitle>
        </IonToolbar>
    </IonHeader>
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol >A</IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </>
)


export default QuickLettersPage;