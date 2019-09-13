import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonPage
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React, { FC } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import "./landing.css";

import { add, remove } from 'ionicons/icons';

const HomePage: FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Quick Math for Ben</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="Landing" >
        <div className="Aligner">
          <div className="Aligner-item Aligner-item--fixed">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <Link to="/addition" >
                    <IonButton shape="round" color="primary" size="large" >
                      ADDITION <IonIcon icon={add} slot="end" />
                    </IonButton>
                  </Link>
                </IonCol>
                <IonCol>
                  <Link to="/subtraction" >
                    <IonButton shape="round" color="danger" size="large" >
                      SUBTRACTION <IonIcon icon={remove} slot="end" />
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
                      DIVISION <span style={{ width: "28px", fontSize: "38px", marginLeft: "10px" }} >&divide;</span>
                    </IonButton>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default HomePage;
