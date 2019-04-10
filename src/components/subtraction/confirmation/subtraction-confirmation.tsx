import React, { useEffect, useState, useReducer, FC } from 'react';
import { Link } from 'react-router-dom';
import { IonRow, IonCol, IonGrid, IonContent, IonText, IonButton, IonIcon } from '@ionic/react';



/*
const SubtractionConfirmationControl: SFC<Props> = (
    { totalProblems, totalCorrect }) => (<IonContent >
        <IonGrid>
            <IonRow><IonCol>
                <IonText>Good work completing the exercise!</IonText>
            </IonCol></IonRow>
            <IonRow>
                <IonCol>
                    <IonText>{`You correctly answered ${totalCorrect} out of ${totalProblems} subtraction problems!`}</IonText>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <Link to={`/subtraction`}>
                        <IonButton>More Problems!</IonButton>
                    </Link>
                </IonCol>
            </IonRow>
        </IonGrid>

    </IonContent>
    )
*/

const getStuff = () => {
    return "Erik B Cox"
}

type Props = {
    totalProblems: number,
    totalCorrect: number
}

const SubtractionConfirmationControl: FC<Props> = ({totalCorrect, totalProblems}) => {
    const [yourname, setYourname] = useState("");
    const [problemCountNext, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "GO_UP":
                return state + 1;
            case "GO_DOWN":
                return state - 1;
            default:
                return state;
        }
    }, 10);

    useEffect(() => {
        const outerName = getStuff();
        if (yourname === "") {
            setYourname(outerName)
        }
    },)

    return (
        <IonContent >
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonText>Good work completing the exercise!</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonText>{`You correctly answered ${totalCorrect} out of ${totalProblems} subtraction problems!`}</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"2"}>
                        <IonText>What is your name?</IonText>
                    </IonCol>
                    <IonCol size={"2"}>
                        <input value={yourname} onChange={(event) => setYourname(event.target.value)} />
                    </IonCol>
                </IonRow>
                {yourname &&
                    <IonRow>
                        <IonCol >
                            <IonText color="ternary">{`Hey ${yourname}, I'm pleased to meet you`}</IonText>
                        </IonCol>

                    </IonRow>
                }
                <IonRow>
                    <IonCol>
                        <Link to={`/subtraction`}>
                            <IonButton>{`Do ${problemCountNext} More Problems!`}</IonButton>
                        </Link>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonButton onClick={() => dispatch({ type: "GO_DOWN" })}><IonIcon name="remove" /></IonButton>
                        <IonButton onClick={() => dispatch({ type: "GO_UP" })}><IonIcon name="add" /></IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}


export default SubtractionConfirmationControl;