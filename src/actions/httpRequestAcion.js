import {actionTypes} from '../constant';

export function httpRequestBegin(){
    return {type:actionTypes.HTTP_CALL_BEGIN};
}

export function httpRequestEnd(){
    return { type:actionTypes.HTTP_CALL_END};
}