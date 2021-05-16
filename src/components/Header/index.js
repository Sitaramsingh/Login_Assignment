
import React from 'react';
import {useDispatch} from 'react-redux';
import './index.css';
import Button from '../Button';
import {logOut} from '../../actions';

export default function Index() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <header className='header'>
                
                <Button onClick={handleLogout} className='button'>Logout</Button>
            </header>
        </div>
    );
}
