import React, { Component } from 'react';
import {
  IonButton, IonToolbar, IonFooter,
  IonRippleEffect, IonItem, IonLabel, IonIcon, IonTitle, IonGrid, IonRow, IonCol, IonText,
} from '@ionic/react';
import SubtractionHeader from '../components/subtraction/header';
import SubtractionProblemControl from '../components/subtraction/subtraction-problem';
import { SubtractionProblem, SubtractionProblemGenerator } from '../models/subtraction';
import {
  CSSTransition,
} from 'react-transition-group';
import "./subtraction-page.css";

type State = {
  answer?: number,
  answeredIncorrectly: boolean,
  checkAnswer: boolean,
  correctCount: number,
  totalCount: number,
  problem: SubtractionProblem,
}

const generator = new SubtractionProblemGenerator(20, 0);

const initialState: State = { answeredIncorrectly: false, checkAnswer: false, correctCount: 0, totalCount: 0, problem: generator.getNext() }
class QuickSubtractionPage extends Component<object, State>{
  readonly state: State = initialState
  onUpdateAnswer = (answer: number) => {
    this.setState({ answer });
  }

  onCheckAnswer = () => {
    if (this.state.answer === null || this.state.answer === undefined) {
      return;
    }
    this.setState({
      checkAnswer: true,
      answeredIncorrectly: this.state.answer === this.state.problem.difference()
    });
  }

  onRetryAnswer = () => {
    this.setState({ answer: undefined, checkAnswer: false, });
  }

  onNextProblem = () => {
    this.handleIncrementTotal();
    if (!this.state.answeredIncorrectly) {
      this.handleIncrementCorrect();
    }
    this.setState({
      answer: undefined,
      checkAnswer: false,
      problem: generator.getNext(),

    })
  }

  handleIncrementTotal = () => this.setState(incrementTotal);
  handleIncrementCorrect = () => this.setState(incrementCorrect);

  showSuccess = () => {
    return (<IonItem color="success" onClick={() => this.onNextProblem()}>
      <IonLabel >
        Correct Answer!
        </IonLabel>
      <IonIcon name="star" slot="end" />
      <IonIcon name="happy" slot="end" />
      <IonIcon name="star" slot="end" />
      <IonIcon name="happy" slot="end" />
    </IonItem>)
  }

  footerLabel = () => {
    return (
      <IonItem lines="none">
        <IonText >{`Problem ${this.state.totalCount + 1} of 20`}</IonText>
      </IonItem>
    )
  }

  showIncorrect = () => {
    return (<IonItem color="danger" onClick={() => this.onRetryAnswer()}>
      <IonLabel>
        Not quite right. Let's try again.
        </IonLabel>
      <IonIcon name="redo" slot="end" />
    </IonItem>)
  }

  render() {
    return (
      <>
        <SubtractionHeader />
        <SubtractionProblemControl
          problem={this.state.problem}
          answer={this.state.answer}
          onDeleteValueFromAnswer={() => {
            if (this.state.answer && this.state.answer.toString().length > 0) {
              const updatedAnswerAsString = this.state.answer.toString().substr(0, this.state.answer.toString().length - 1)
              this.onUpdateAnswer(+updatedAnswerAsString)
            }
          }}
          onAddValueToAnswer={(value: number) => {
            if (this.state.answer && this.state.answer.toString().length > 0) {
              const updatedAnswerAsString = `${this.state.answer}${value}`;
              this.onUpdateAnswer(+updatedAnswerAsString)
            } else {
              this.onUpdateAnswer(value);
            }
          }} />
        <CSSTransition
          timeout={{ enter: 300, exit: 700 }}
          in={this.state.checkAnswer && this.state.answer === this.state.problem.difference()} classNames="labeltrans">
          <div>
            {this.state.checkAnswer && this.state.answer === this.state.problem.difference() && this.showSuccess()}
          </div>
        </CSSTransition>
        <CSSTransition
          timeout={{ enter: 300, exit: 700 }}
          in={this.state.checkAnswer && this.state.answer !== this.state.problem.difference()} classNames="labeltrans">
          <div>
            {this.state.checkAnswer && this.state.answer !== this.state.problem.difference() && this.showIncorrect()}
          </div>
        </CSSTransition>
        <IonFooter>
          <IonGrid>
            <IonRow>
              <IonCol>
                {this.footerLabel()}
              </IonCol>
              <IonCol>
                {!this.state.checkAnswer && <IonButton color="dark" expand="full" onClick={() => this.onCheckAnswer()}>Answer</IonButton>}
                {this.state.checkAnswer && this.state.answer !== this.state.problem.difference() && <IonButton color="tertiary" expand="full" onClick={() => this.onRetryAnswer()}>Try Again</IonButton>}
                {this.state.checkAnswer && this.state.answer === this.state.problem.difference() && <IonButton color="secondary" expand="full" onClick={() => this.onNextProblem()}>Next</IonButton>}

              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </>
    )
  }
}

const incrementTotal = (prevState: State) => ({ totalCount: prevState.totalCount + 1 });
const incrementCorrect = (prevState: State) => ({ correctCount: prevState.correctCount + 1 });

export default QuickSubtractionPage;
