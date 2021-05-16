import {actionTypes} from '../constant';
import toaster from '../components/Toaster';

// const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

export const doLogin = (authenticate) => {
    
    return (dispatch => {
       return fetch('login.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }) .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            if(myJson.status === 'success' && myJson.data.login){
                const {username, password} = myJson.data.login;
                if(myJson.data.login && authenticate.userId === username && authenticate.password === password){
                    localStorage.setItem('isAuthenticated', true);
                    dispatch(loginSuccess(true));

                }else{
                    console.log('login failed')  
                    toaster.error('Login failed please login with correct user.');
                    localStorage.setItem('isAuthenticated', false);
                    dispatch(loginFailure(false));

                }
            }
          }).catch(err => {
            throw (err);
        });
    })}

    const loginSuccess = (payload) => {
      return { type: actionTypes.LOGIN_SUCCESS, data: payload };
    }


    export const logOut = () => {
        return (dispatch => {
            localStorage.clear();
            dispatch(loginFailure(JSON.parse(localStorage.getItem('isAuthenticated'))));
        });
    }

    
const  loginFailure = (payload) =>{
    return { type: actionTypes.LOGIN_FAILURE, data: payload };
}

    export const authCheckState = () => {
      const isAuthenticated =   JSON.parse(localStorage.getItem('isAuthenticated'));

        return dispatch => {
            if (isAuthenticated) {
                dispatch(loginSuccess(isAuthenticated));
            }else {
                dispatch(loginFailure(isAuthenticated));
            }
        }

    }