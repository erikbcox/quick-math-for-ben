import React, { SFC, Component } from 'react';
import { IonButton, IonToolbar, IonFooter, IonRippleEffect, IonItem, IonLabel, IonText, IonIcon } from '@ionic/react';
import SubtractionHeader from '../components/subtraction/header';
import SubtractionProblemControl from '../components/subtraction/subtraction-problem';
import { SubtractionProblem, SubtractionProblemGenerator } from '../models/subtraction';

type State = {
    answer?: number,
    answeredIncorrectly: boolean,
    checkAnswer: boolean,
    correctCount: number,
    totalCount: number,
    problem: SubtractionProblem,
}

const generator = new SubtractionProblemGenerator(20,0);

const initialState: State = { answeredIncorrectly: false, checkAnswer: false, correctCount: 0, totalCount: 0, problem:generator.getNext()}
class QuickSubtractionPage extends Component<object, State>{
    readonly state: State = initialState
    onUpdateAnswer = (answer: number) => {
        this.setState({ answer });
    }

    onCheckAnswer = () => {
        if(this.state.answer === null || this.state.answer === undefined){
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
        if(!this.state.answeredIncorrectly){
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
                {this.state.checkAnswer && this.state.answer === this.state.problem.difference() && this.showSuccess()}
                {this.state.checkAnswer && this.state.answer !== this.state.problem.difference() && this.showIncorrect()}

                <IonFooter>
                    <IonToolbar >
                        {!this.state.checkAnswer && <IonButton color="dark" expand="full" style={{ fontSize: "2em" }} onClick={() => this.onCheckAnswer()}><IonRippleEffect /> Answer</IonButton>}
                        {this.state.checkAnswer && this.state.answer !== this.state.problem.difference() && <IonButton color="tertiary" expand="full" style={{ fontSize: "2em" }} onClick={() => this.onRetryAnswer()}><IonRippleEffect /> Try Again</IonButton>}
                        {this.state.checkAnswer && this.state.answer === this.state.problem.difference() && <IonButton color="secondary" expand="full" style={{ fontSize: "2em" }} onClick={() => this.onNextProblem()}><IonRippleEffect /> Next Problem</IonButton>}

                    </IonToolbar>
                </IonFooter>
            </>
        )
    }
}

const incrementTotal = (prevState: State) => ({ totalCount: prevState.totalCount });
const incrementCorrect = (prevState: State) => ({ correctCount: prevState.correctCount });

export default QuickSubtractionPage;