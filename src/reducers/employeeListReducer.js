import {actionTypes} from '../constant';

let initialState = {
    employeeList: null
};

const handleEmployee = (state, action) => {
    let newState = {...state};
    newState.employeeList = action.data;
    return newState;

}

export default function employeeListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.EMPLOYEE_LIST:
            return handleEmployee(state, action);
        default:
            return state;
    }
}