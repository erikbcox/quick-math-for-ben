import React, { SFC } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonIcon, 
    IonRippleEffect, IonFab, IonFabButton, IonText, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, 
    IonCol, IonImg } from "@ionic/react";
import { Link } from "react-router-dom";
import "./landing.css";
import divisionIcon from "../../images/division-symbol.svg"

const Landing: SFC<any> = ({ }) => (<>
    <IonHeader>
        <IonToolbar>
            <IonTitle>MATH FOR BEN</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent class="Landing" >
        <div className="Aligner">
            <div className="Aligner-item Aligner-item--fixed">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <Link to="/addition" >
                                <IonButton shape="round" color="primary" size="large" >
                                    ADDITION <IonIcon name="add" slot="end" />
                                </IonButton>
                            </Link>
                        </IonCol>
                        <IonCol>
                            <Link to="/subtraction" >
                                <IonButton shape="round" color="danger" size="large" >
                                    SUBTRACTION <IonIcon name="remove" slot="end" />
                                </IonButton>
                            </Link>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <Link to="/multiplication" >
                                <IonButton shape="round" color="tertiary" size="large" >
                                    MULTIPLICATION <IonIcon name="close" slot="end" />
                                </IonButton>
                            </Link>
                        </IonCol>
                        <IonCol>
                            <Link to="/division" >
                                <IonButton shape="round" color="warning" size="large" >
                                    DIVISION <span style={{width:"28px", fontSize:"38px", marginLeft:"10px"}} >&divide;</span>                                    
                                </IonButton>
                            </Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </div>
    </IonContent>
</>
)

export default Landing;