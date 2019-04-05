import React, { SFC } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonIcon, IonRippleEffect, IonFab, IonFabButton, IonText, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { Link } from "react-router-dom";
import "./landing.css";



const Landing: SFC<any> = ({ }) => (<>
    <IonHeader>
        <IonToolbar>
            <IonTitle>MATH FOR BEN</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent class="Landing" >
        <div className="Aligner">
            <div className="Aligner-item Aligner-item--fixed">
                <Link to="/subtraction" >
                    <IonButton class="Start-button" shape="round" color="danger" size="large" >
                        Lets Start <IonIcon slot="end" name="send" />
                    </IonButton>
                </Link>
            </div>
        </div>
    </IonContent>
</>
)

export default Landing;

/*
style={{ marginLeft: "auto", marginRight: "auto", textAlign:"center" }}style={{ height: "80vh" }}
        <Link to={`/addition`}>
            <IonCard >
                <IonCardHeader>
                    <IonCardSubtitle>Quick Addition</IonCardSubtitle>
                    <IonCardTitle>Math problems to learn addition</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </Link>
        <Link to={`/subtraction`}>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Quick Subtraction</IonCardSubtitle>
                    <IonCardTitle>Ohhh even harder than addition, lets learn</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </Link>
        <Link to={`/letters`}>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Quick Letters</IonCardSubtitle>
                    <IonCardTitle>Do you know how to write a letter?</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </Link>*/