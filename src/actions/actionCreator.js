import axios from 'axios';
import rest from '../static/rest';
import ACTIONS from '../static/ACTIONS'

const importUsers = users => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: users
    }
};

const importRepos = repos => {
    return {
        type: ACTIONS.IMPORT_REPOS,
        payload: repos
    }
};

const showLoader = () => {
    return {
        type: ACTIONS.SHOW_LOADER,
    }
};
const hideLoader = () => {
    return {
        type: ACTIONS.HIDE_LOADER,
    }
};

const login = params => {
    return {
        type: ACTIONS.LOGIN,
        payload: params
    }
};

const logout = () => {
    return {
        type: ACTIONS.LOGOUT
    }
};

const remove = userId => {
    return {
        type: ACTIONS.REMOVE_FROM_FAVOURITE,
        payload: userId
    }
};

const add = userId => {
    return {
        type: ACTIONS.ADD_TO_FAVOURITE,
        payload: userId
    }
};

const loadFav = favourities => {
    return {
        type: ACTIONS.LOAD_FAVOURITE,
        payload: favourities
    }
};

// --------------------- REST

export const importGithubUsers = () => dispatch => {
    dispatch(showLoader());
    return axios
        .get(rest.githubAllUsers)
        .then(response => {
            dispatch(importUsers(response.data));
            dispatch(hideLoader());
        })
        .catch(err => {
            dispatch(hideLoader());
            dispatch(showSnackbar());
            return err;
        });
};

export const getRepo = data => dispatch => {
    // dispatch(showLoader());
    showLoader();
    return axios
        .get(data)
        .then(response => {
            // dispatch(importRepos(response.data))
            // dispatch(hideLoader());
            hideLoader();
            return response.data;
        })
        .catch(err => {
            dispatch(hideLoader());
            return err;
        });
};

export const addToFavourities = userId => dispatch => {
    return axios.post(`http://localhost:3000/favourite/${userId}`, {data: userId})
        .then(response => {
            return dispatch(add(userId));
        }).catch(err => err)
};

export const removeFavourities = userId => dispatch => {
    return axios.post(`http://localhost:3000/favourite/remove/${userId}`, {data: userId})
        .then(response => {
            return dispatch(remove(userId));
        }).catch(err => err);
};

export const loadFavourities = () => dispatch => {
    return axios.get(`http://localhost:3000/favourite`)
        .then(response => {
            return dispatch(loadFav(response.data.favourite));
        }).catch(err => err);
};

export const loginPerson = data => dispatch => {
    dispatch(showLoader());
    return axios.post('http://localhost:3000/login',{data: data})
        .then(response => {
            dispatch(hideLoader());
            return dispatch(login(data));
        })
        .catch(err => err)
};

export const logoutPerson = () => dispatch => {
    dispatch(logout());
};

export const showLoginModal = () => {
    return {
        type: ACTIONS.SHOW_LOGIN_MODAL
    }
};

export const hideLoginModal = () => {
    return {
        type: ACTIONS.HIDE_LOGIN_MODAL
    }
};

export const showSnackbar = () => {
    return {
        type: ACTIONS.SHOW_SNACKBAR
    }
};

export const hideSnackbar = () => {
    return {
        type: ACTIONS.HIDE_SNACKBAR
    }
};