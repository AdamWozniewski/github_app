import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// root reducer, głowny start store
import rootReducer from './reducers/index';

// create an object on the default data
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
export default store;