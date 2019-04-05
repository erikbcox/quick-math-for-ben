import React, { SFC } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const Problem: SFC<any> = ({ }) => (<IonGrid>
    <IonRow style={{height: "100%"}}>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#178AFC' }}>4</div> </IonCol>
        <IonCol size="1" ><div style={{ fontSize: 40, textAlign: "center" }}>+</div> </IonCol>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#F21439' }}>3</div> </IonCol>
        <IonCol size="1" ><div style={{ fontSize: 40, textAlign: "center" }}>=</div> </IonCol>
        <IonCol size="3" ><div style={{ fontSize: 40, textAlign: "center", color: '#4FB60F' }}>?</div> </IonCol>
    </IonRow>
</IonGrid>
)

export default Problem;