import React,{useContext, useState} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../type/Types';



    export const Navbar = () => {
     

    const [item, setItem] = useState('');

    
  
    const {user, dispatch} = useContext(AuthContext)

    console.log(user.logged);

    const onLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Fernanda'
            }
        })

       
    }
    
    const onLogOut = () => {
        dispatch({
            type: types.logout
        })
       
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                        <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>)

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                 

                   
                    
                    <form className="form-inline my-2 my-lg-0">

                       
                        <input  className="form-control mr-sm-2" 
                               type="search" 
                               placeholder="Search" 
                               aria-label="Search"
                               value={item}
                               onChange={(e)=>setItem(e.target.value)}
                               
                               />
                               
                        <Link to={{pathname: `/buscar/${item}`,
                            state: {palabra: item }}}>
                        <button  className="btn btn-outline-success my-2 my-sm-0 mr-5" type="button">Search</button>
                        </Link>
                        
                    </form>
                    
                 {
                     user.logged === false? (
                        <li className="btn btn-outline-danger ml-3" 
                        onClick={()=>onLogin()}>
                        Login
                    </li>
                     ):null
                 }

                  {
                      user.logged===true? (  <li
                        className="btn btn-outline-success my-2 my-sm-0 ml-4" 
                        onClick={()=>onLogOut()}>
                        Logout
                    </li>
                    ):(
                        null
                    )
                  }

                    <li 
                           className="nav-item nav-link" 
                    >
                        {user.name && user.name}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

