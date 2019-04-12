import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp
} from '@ionic/react';
import QuickAdditionPage from './components/addition/quick-addition';
import { Route, Switch } from 'react-router';
import QuickLettersPage from './components/letters/quick-letters';
import QuickSubtractionPage from './page/subtraction-page';
import './styles/main.css';
import Landing from './components/site/landing';

class App extends Component {
  render() {
    return (
      <IonApp>
        <Switch>
          <Route exact={true} path='/' render={() => <Landing />} />
          <Route exact={true} path='/addition' component={QuickAdditionPage} />
          <Route exact={true} path='/subtraction' component={QuickSubtractionPage} />
          <Route exact={true} path='/letters' component={QuickLettersPage} />
        </Switch>
      </IonApp>
    );
  }
}

export default App;