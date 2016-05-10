import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import NoMatch from './containers/NoMatch';
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import './styles/app.css'

const store = configureStore();

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
