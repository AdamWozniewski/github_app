import ACTIONS from '../static/ACTIONS';

const defaultProps = {
    loader: false,
    loginModal: true,
    snackbar: false
};

function app(state = defaultProps, action) {
    switch (action.type) {
        case ACTIONS.SHOW_LOADER:
            return {
                ...state,
                loader: true
            };
        case ACTIONS.HIDE_LOADER:
            return {
                ...state,
                loader: false
            };
        case ACTIONS.SHOW_LOGIN_MODAL:
            return {
                ...state,
                loginModal: true
            };
        case ACTIONS.HIDE_LOGIN_MODAL:
            return {
                ...state,
                loginModal: false
            };
        case ACTIONS.SHOW_SNACKBAR:
            return {
                ...state,
                snackbar: true
            };
        case ACTIONS.SHOW_SNACKBAR:
            return {
                ...state,
                snackbar: false
            };
        default: return state;
    }
}

export default app;