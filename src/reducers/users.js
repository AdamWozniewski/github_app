import ACTIONS from '../static/ACTIONS';

const defaultProps = {
    usersList: [],
    repos: [],
    favourities: [],
    loggedPerson: null
};

function users(state = defaultProps, action) {
    switch (action.type) {
        case ACTIONS.GET_ALL_USERS:
            return {
                ...state,
                usersList: action.payload
            };
        case ACTIONS.IMPORT_REPOS:
            return {
                ...state,
                repos: action.payload
            };
        case ACTIONS.ADD_TO_FAVOURITE:
            let newStateFavourite = state.favourities;
            newStateFavourite.push(action.payload);
            return {
                ...state,
                favourities: newStateFavourite
            };
        case ACTIONS.REMOVE_FROM_FAVOURITE:
            let newStateRemoveFavourite = state.favourities.filter(items => items !== action.payload);
            return {
                ...state,
                favourities: newStateRemoveFavourite
            };
        case ACTIONS.LOAD_FAVOURITE:
            return {
                ...state,
                favourities: action.payload
            };
        case ACTIONS.LOGIN:
            return {
                ...state,
                loggedPerson: action.payload
            };
        case ACTIONS.LOGOUT:
            return {
                ...state,
                loggedPerson: null
            };
        default: return state;
    }
}

export default users;