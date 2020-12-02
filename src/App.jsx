import React, {useReducer, useEffect} from 'react';
import './App.css';
import './styles/styles.scss';
import { AuthContext } from './auth/AuthContext';
import { AuthReducer } from './auth/AuthReducer';

import AppRouters from './routers/AppRouters';


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {  logged: false }
}

function App() {


const [user, dispatch] = useReducer(AuthReducer, {}, init)

useEffect(() => {

  localStorage.setItem('user', JSON.stringify(user))
  
}, [user])

  return (

    <AuthContext.Provider value={{user, dispatch}}>

          <AppRouters/>


    </AuthContext.Provider>
  
       

    
    
  );
}

export default App;
