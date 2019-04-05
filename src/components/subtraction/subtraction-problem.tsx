import React, { SFC } from 'react';
import { IonContent } from '@ionic/react';
import Problem from './problem';
import InputBox from './InputBox';


const SubtractionProblemControl: SFC<any> = ({ }) => (
    <IonContent>
        <Problem />
        <InputBox />
    </IonContent>
)


export default SubtractionProblemControl;