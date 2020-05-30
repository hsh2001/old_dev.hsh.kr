import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './scss/reset.scss';
import Root from './components/Root';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
