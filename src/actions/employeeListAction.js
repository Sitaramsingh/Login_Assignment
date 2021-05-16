import {actionTypes} from '../constant';

export const employeeListAction = () => {
    return (dispatch => {
       return fetch('employeeList.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }) .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            if(myJson.status === 'success'){
                // console.log(myJson.data.user, 'myJson');
              dispatch(employeeListActionResponse(myJson.data.user));
            }
          }).catch(err => {
            throw (err);
        });
    })}

    const employeeListActionResponse = (payload) => {
      return { type: actionTypes.EMPLOYEE_LIST, data: payload };
    }
