import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import { home, list, add, remove, close } from 'ionicons/icons';
import './styles/main.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import QuickSubtractionPage from './pages/subtraction-page';
import QuickAdditionPage from './pages/addition-page';
import QuickMultiplicationPage from './pages/multiplication-page';
import QuickDivisionPage from './pages/division-page';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title:'Addition',
    url:'/addition',
    icon: add
  },
  {
    title:'Subtraction',
    url:'/subtraction',
    icon: close
  },
  {
    title:'Multiplication',
    url:'/multiplication',
    icon: remove
  },
  {
    title:'Division',
    url:'/division',
    icon: remove
  }
];
/*

            <Route exact={true} path='/addition' component={QuickAdditionPage} />
            <Route exact={true} path='/subtraction' component={QuickSubtractionPage} />
            <Route exact={true} path='/division' component={QuickDivisionPage} />
            <Route exact={true} path='/multiplication' component={QuickMultiplicationPage} />
*/

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonPage id="main">
          <IonRouterOutlet>
            <Route path="/:tab(home)" component={Home} exact={true} />
            <Route path="/:tab(home)/list" component={List} exact={true} />
            <Route path="/:tab(addition)" component={QuickAdditionPage} exact={true} />
            <Route path="/:tab(subtraction)" component={QuickSubtractionPage} exact={true} />
            <Route path="/:tab(multiplication)" component={QuickMultiplicationPage} exact={true} />
            <Route path="/:tab(division)" component={QuickDivisionPage} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
