import React, { FC, useState } from "react";
import { IonFooter, IonGrid, IonRow, IonCol, IonButton, IonItem, IonText, IonLabel, IonIcon } from "@ionic/react/dist/components";
import { CSSTransition } from "react-transition-group";


type Props = {
    activeProblemIndex: number,
    totalProblemCount: number,
    isAnswerCorrect: boolean,
    isAnswerEmpty: boolean,
    readonly onResetAnswer: () => void,
    readonly onGoToNext: (correctFirstTry: boolean) => void,
    readonly onGoToDone: (correctFirstTry: boolean) => void,
    isLastProblem: boolean,
}

const SubtractionControls: FC<Props> = ({ activeProblemIndex, isLastProblem,isAnswerEmpty, totalProblemCount, isAnswerCorrect, onResetAnswer, onGoToNext, onGoToDone }) => {
    const [checkAnswer, setCheckAnswer] = useState(false);
    const [isFirstAnswerCorrect, setIsFirstAnswerCorrect] = useState(false);
    const [tryCount, setTryCount] = useState(0);
    const resetControl = () => {
        setCheckAnswer(false);
        setTryCount(0);
        setIsFirstAnswerCorrect(false);
    }
    return (<><CSSTransition
        timeout={{ enter: 300, exit: 700 }}
        in={checkAnswer && isAnswerCorrect} classNames="labeltrans">
        <div>
            {checkAnswer && isAnswerCorrect && <IonItem color="success" >
                <IonLabel >Correct Answer!</IonLabel>
                <IonIcon name="star" slot="end" />
                <IonIcon name="happy" slot="end" />
            </IonItem>}
        </div>
    </CSSTransition>
        <CSSTransition
            timeout={{ enter: 300, exit: 700 }}
            in={checkAnswer && !isAnswerCorrect} classNames="labeltrans">
            <div>
                {checkAnswer && !isAnswerCorrect && <IonItem color="danger" onClick={() => {
                            onResetAnswer();
                            setCheckAnswer(false);
                        }}>
                    <IonLabel>Not quite right.</IonLabel>
                    <IonIcon name="redo" slot="end" />
                </IonItem>}
            </div>
        </CSSTransition>
        <IonFooter>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonItem lines="none">
                            <IonText >{`Problem ${activeProblemIndex + 1} of ${totalProblemCount}`}</IonText>                           
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        {!checkAnswer && <IonButton color="dark" expand="full" onClick={() => {
                            if(isAnswerEmpty){
                                return;
                            }
                            setCheckAnswer(true);
                            if (tryCount === 0 && isAnswerCorrect) {
                                setIsFirstAnswerCorrect(true);
                            }
                            
                            setTryCount(tryCount + 1);
                        }}>Answer</IonButton>}
                        {checkAnswer && !isAnswerCorrect && <IonButton color="tertiary" expand="full" onClick={() => {
                            onResetAnswer();
                            setCheckAnswer(false);
                        }}>Try Again</IonButton>}
                        {checkAnswer && isAnswerCorrect && !isLastProblem && <IonButton color="secondary" expand="full" onClick={() => {
                            onGoToNext(isFirstAnswerCorrect)
                            resetControl()
                        }}>Next</IonButton>}
                        {checkAnswer && isAnswerCorrect && isLastProblem && <IonButton color="success" expand="full" onClick={() => {
                            onGoToDone(isFirstAnswerCorrect)
                            resetControl()
                        }}>Done</IonButton>}
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonFooter></>);
}

export default SubtractionControls;
