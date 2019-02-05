import {CREATE_MESSAGE } from './Types';

export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}