import {actionTypes} from '../constant';

let initialState = {
    isAuthenticated: false
};

const handleLogin = (state, action) => {
    return updateObject(state,{
        ...state,
        isAuthenticated:action.data
    });
}

const logineFailure = (state, action) => {
    // debugger
    return updateObject(state,{
        ...state,
        isAuthenticated:action.data
    });
}


 const updateObject = (oldObject, updatedProperties) => {
    const newObj = Object.assign({},oldObject,updatedProperties);
    return newObj;
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return handleLogin(state, action);
        case actionTypes.LOGIN_FAILURE:
            return logineFailure(state, action);  
        default:
            return state;
    }
}