import {combineReducers} from 'redux';
import auth from './auth';
import errors from './errors';
import leads from './leads';
import messages from './messages';

export default combineReducers({
    auth,
    errors,
    leads,
    messages
});