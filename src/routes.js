import React, {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";
import EmployeeList from './container/Dashboard';
import Login from './container/Login';
import NotFound from './components/NotFound';
import {authCheckState} from './actions';

function Routes(props) {
  const dispatch = useDispatch();
  const authentication = useSelector( state => state.login.isAuthenticated);
  console.log(authentication, 'authcheck')

  useEffect(() => {
    dispatch(authCheckState());
  }, [])

  useEffect(() => {
    if(authentication){
      props.history.push('/EmployeeList')
    }else{
      props.history.push('/login')
    }
  }, [authentication])
  
  return (
      <div className="App">
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/EmployeeList" component={EmployeeList} />
          { localStorage.getItem('isAuthenticated') ? 
                (props.location.pathname === "/" ? 
                    <Redirect to="/EmployeeList"/> : 
            <Route component={NotFound} />) : <Redirect to="/login" /> } 
        </Switch>
      </div>
  );
}

export default withRouter(Routes);