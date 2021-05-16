import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './index.css';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import Container from '../../components/Container';
import  {doLogin} from '../../actions';
import {labelName} from '../../constant';

export default function Index() {
    const [userIdErrorMessage, setUserIdErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordErrorType, setPasswordErrorType] = useState(false);
    const [userIdErrorType, setUserIdErrorType] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [authenticate, setAuthenticate] = useState({
        userId: '',
        password: ''
    });

    const dispatch = useDispatch();

    function handleUserInfoChange(event) {
        let newState = Object.assign({}, authenticate, { [event.target.name]: event.target.value });
        setAuthenticate(newState);
        validateFields();
    }

     //show hide password
     function handleClickShowPassword() {
        setShowPassword(!showPassword);
    }
    //on change event of input - reset error message
    function validateFields() {
        setUserIdErrorMessage('');
        setUserIdErrorType(false);
        setPasswordErrorMessage('');
        setPasswordErrorType(false);
        // setValidUser(null);
    }
     //login event    
     function userLogin(event) {
        //validationg userid and password
        event.preventDefault();
        if (!authenticate.userId || !authenticate.password) {
           
            if (!authenticate.userId) {
                setUserIdErrorMessage('User Name is Required');
                setUserIdErrorType(true);
                return;
            }else if(!validateEmail(authenticate.userId)){
                setUserIdErrorMessage('Enter valid User Name');
                setUserIdErrorType(true);
                return;
            }
            else if (!authenticate.password) {
                setPasswordErrorMessage('Password is Required');
                setPasswordErrorType(true);
                return;
            }
        }else{
            dispatch(doLogin(authenticate));
        }
    }

    const validateEmail = email => {
        return new RegExp(/[\w-]+@([\w-]+\.)+[\w-]+/gm).test(email);
    };
    
    
    return (
        <Container className='containerStyle'>
            <div className='formStyle'>
                <h1>{labelName.sign_in}</h1>
                <form className='loginForm'>
                    <div className='loginCredentials'>
                        <InputBox id="userId" name="userId" inputstyle="text" error={userIdErrorType}
                            label="User Name" style={{ width: "100%", marginBottom: "15px" }} type="text" variant="outlined"
                            helpertext={userIdErrorMessage} onChange={handleUserInfoChange}
                            onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                    document.getElementById("userId").focus();
                                    ev.preventDefault();
                                }
                            }} />
                        <InputBox id="password" name="password" inputstyle="password" showPassword={showPassword}
                            handleClickShowPassword={handleClickShowPassword} error={passwordErrorType} label="Password"
                            style={{ width: "100%", marginBottom: "15px" }} type="password" variant="outlined" helpertext={passwordErrorMessage}
                            onChange={handleUserInfoChange}
                            onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                    userLogin(ev);
                                }
                            }} />
                    </div>
                </form>
                <div className='loginCredentials' style={{ marginTop: "20px" }}>
                    <Button btnType="btn-style" className='buttonstyle' onClick={userLogin}>Login</Button>
                </div>
            </div>
        </Container>
    );
}
