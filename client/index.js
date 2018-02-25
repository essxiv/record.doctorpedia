// Libraries ***
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

// Components ***
import Initial from './components/Initial';
import Video from './components/Video';
import PageNotFound from './components/PageNotFound';


// Store ***
import store from '../redux/store';

// history creation with redux-store ***
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Initial} />
            <Route path="/video" component={Video} />            
            <Route path="*" component={PageNotFound} />
        </Router>
    </Provider>,
    document.getElementById('root')
);