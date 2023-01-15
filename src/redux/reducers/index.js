import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import daReport from './daReport';
import arReport from './arReport';

export default combineReducers({
    auth,
    message,
    daReport,
    arReport,
});
