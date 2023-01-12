import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import daReport from './daReport';

export default combineReducers({
    auth,
    message,
    daReport,
});
