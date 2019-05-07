import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon, IonHeader, IonToolbar, IonButtons, IonTitle } from '@ionic/react';

type Props = {
    title: string,
}

const ProblemHeader: FC<Props> = ({ title }) => {
    return (<IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <Link to={`/`}><IonIcon slot="start" name="arrow-round-back" /></Link>
            </IonButtons>
            <IonTitle>{title}</IonTitle>
        </IonToolbar>
    </IonHeader>);
}

export default ProblemHeader;
