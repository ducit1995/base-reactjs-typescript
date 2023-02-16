import { combineReducers } from 'redux';
import { alert } from './Alert';
import { authentication } from './Authentication';
const appReducers = combineReducers({
    alert,
    authentication,
});

export default appReducers;
