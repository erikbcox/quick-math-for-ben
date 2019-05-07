import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp
} from '@ionic/react';
import QuickAdditionPage from './page/addition-page';
import { Route, Switch } from 'react-router';
import QuickSubtractionPage from './page/subtraction-page';
import './styles/main.css';
import Landing from './components/site/landing';
import ErrorBoundary from './page/ErrorBoundtry';
import QuickMultiplicationPage from './page/multiplication-page';
import QuickDivisionPage from './page/division-page';

class App extends Component {
  render() {
    return (
      <IonApp>
        <ErrorBoundary>
          <Switch>
            <Route exact={true} path='/' render={() => <Landing />} />
            <Route exact={true} path='/addition' component={QuickAdditionPage} />
            <Route exact={true} path='/subtraction' component={QuickSubtractionPage} />
            <Route exact={true} path='/division' component={QuickDivisionPage} />
            <Route exact={true} path='/multiplication' component={QuickMultiplicationPage} />
          </Switch>
        </ErrorBoundary>
      </IonApp>
    );
  }
}

export default App;