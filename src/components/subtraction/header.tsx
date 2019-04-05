import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon, IonHeader, IonToolbar, IonButtons, IonTitle } from '@ionic/react';

const SubtractionHeader: SFC<any> = ({ }) => (<IonHeader>
    <IonToolbar>
        <IonButtons slot="start">
            <Link to={`/`}><IonIcon slot="start" name="arrow-round-back" /></Link>
        </IonButtons>
        <IonTitle>Quick Subtraction</IonTitle>
    </IonToolbar>
</IonHeader>
)



export default SubtractionHeader;