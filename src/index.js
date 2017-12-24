import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// less
import './assets/styles/index.less';
//Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
const router = (
    <Provider store={store}>
        <MuiThemeProvider>        
            <Router>
                <Route path="/" component={App}/>
            </Router>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
// registerServiceWorker();