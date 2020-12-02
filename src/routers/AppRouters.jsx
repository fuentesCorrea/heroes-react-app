import React, { useContext } from 'react'
import LoginScreen from '../component/login/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import DashboardRoutes from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
 

const AppRouters = () => {

  const {user} = useContext(AuthContext)
  console.log(user.logged);


  

    return (
        <Router>
        <div>
          <Switch>
            
            <PublicRoute 
            className="auth_main" 
            exact path="/login" 
            isAutenticated={user.logged}
            component={LoginScreen}/>
            
             
             <PrivateRoute  
             path="/"
             isAutenticated={user.logged}
             component={DashboardRoutes}

              />
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouters
