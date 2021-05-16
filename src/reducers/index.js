import { combineReducers } from 'redux';
import httpRequestReducer from './httpReducer';
import employeeListReducer from './employeeListReducer';
import loginReducer from './loginReducer';

const appReducer = combineReducers({
    isLoading: httpRequestReducer,
    employeeListData: employeeListReducer,
    login:loginReducer
});

export default appReducer;