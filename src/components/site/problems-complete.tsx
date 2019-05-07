import React, { FC, } from "react";
import { IonContent, IonButton, IonIcon, IonText, IonGrid, IonRow, IonCol } from "@ionic/react";
import "./problems-confirmation.css";


type Props = {
    totalProblems: number,
    totalCorrect: number,
    readonly onResetProblemSet: () => void,
}

const ProblemsComplete: FC<Props> = ({ totalProblems, totalCorrect, onResetProblemSet }) => {

    return (<IonContent class="DoneLanding" >
        <div className="Aligner">
            <div className="Aligner-item Aligner-item--fixed">
                <IonGrid>
                    <IonRow><IonCol><IonText  class="done-text" color="light">{`Correctly answered ${totalCorrect} of ${totalProblems}`}</IonText></IonCol></IonRow>
                    <IonRow><IonCol> <IonButton class="Start-button" shape="round" color="danger" size="large" onClick={() => onResetProblemSet()} >
                    Lets Start Again <IonIcon slot="end" name="send" />
                </IonButton></IonCol></IonRow>
                </IonGrid>               
            </div>
        </div>
    </IonContent>)
}

export default ProblemsComplete;