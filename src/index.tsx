import 'bootswatch/dist/flatly/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// tslint:disable-next-line:no-var-requires
const finalesJson = require('./finales.json');

ReactDOM.render(
  <App finales={finalesJson.finales}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
