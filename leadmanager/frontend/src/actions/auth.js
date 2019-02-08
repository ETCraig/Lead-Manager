import axios from 'axios';
import { returnErrors } from './messages';
import {
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    USER_LOADING,
    USER_LOADED
} from './Types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios.get('/api/auth/user', tokenConfig(getState)).then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR });
    });
}

export const login = (username, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/user', body, config).then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: LOGIN_FAILED });
    });
}

export const register = ({username, password, email}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, password, email });

    axios.post('/api/auth/register', body, config).then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: REGISTER_FAILED });
    });
}

export const logout = () => (dispatch, getState) => {
    axios.post('/api/auth/logout/', null, tokenConfig(getState)).then(res => {
        dispatch({
            type: LOGOUT_SUCCESS,
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    });
}



export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
}