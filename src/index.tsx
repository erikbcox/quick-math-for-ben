import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/browser';


Sentry.init({
    dsn: "https://34517b80698e4fd1b9382ceed08d8030@sentry.io/1436213"
});
// should have been called before using it here
// ideally before even rendering your react app

ReactGA.initialize("UA-138251738-1");

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
