import {actionTypes} from '../constant';

let initialState = {
    isLoading: false
};

export default function httpRequestStatus(state = initialState.isLoading, action) {
    switch (action.type) {
        case actionTypes.HTTP_CALL_BEGIN:
            return {
                isLoading: true
            };
        case actionTypes.HTTP_CALL_END:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}