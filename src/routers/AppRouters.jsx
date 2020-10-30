import React from 'react'
import LoginScreen from '../component/login/LoginScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import DashboardRoutes from './DashboardRoutes';



const AppRouters = () => {
    return (
        <Router>
        <div>

    
          <Switch>
             <Route exact path="/login" component={LoginScreen}/>
             <Route  path="/" component={DashboardRoutes}/>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouters
