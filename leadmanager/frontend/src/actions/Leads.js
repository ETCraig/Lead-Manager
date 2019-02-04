import axios from 'axios';

import { GET_LEADS } from './Types';

export const getLeads = () => (dispatch, getState) => {
    axios
        .get("/api/leads/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};