import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';
import './scss/reset.scss';
import './scss/buy-me-a-coffee.scss';
import './scss/facebook.scss';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
