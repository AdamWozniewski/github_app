import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import app from './app';

const rootReducer = combineReducers({users, app, routing: routerReducer, form: formReducer});
window.devToolsExtension ? window.devToolsExtension() : f => f;

export default rootReducer;