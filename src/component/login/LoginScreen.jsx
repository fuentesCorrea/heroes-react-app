import React,{useContext} from 'react'
import {  withRouter} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm';
import { types } from '../../type/Types'

const LoginScreen = (props) => {

 const { user, dispatch } = useContext(AuthContext);

 console.log(user);


 const [ inputValue, setInput] = useForm({
     name: 'Fernanda',
     mail: 'jcfuentest@gmail.com'
 })

 const {name, mail} = inputValue;


 const onEnviar = () => {
   
    dispatch({
        type: types.login,
        payload: {
            name: 'pedro'
        }
    })

    props.history.push("/")

 }

 const handleSubmit = (e) => {
     e.preventDefault()
     dispatch({
        type: types.login,
        payload: {
            name: name,
            logged: true
        }
    })
    //props.history.push("/marvel")
 }

    return (    
        <div className="auth_main">

            <div className="col-5 mt-5 pd-5" >
          
                 <div className="auth_main_contain">
                    

                     <form onSubmit={handleSubmit} >
                         <h2 className="auth__title">Login</h2>

                         <input 
                         className="auth__input" 
                         type="text"
                         name='name'
                         placeholder="Ingrese Correo"
                         value={name}
                         onChange={setInput}

                         
                         />
                             <input 
                         className="auth__input" 
                         type="text"
                         name='mail'
                         placeholder="Ingrese Contraseña"
                         value={mail}
                         onChange={setInput}

                         
                         />
                         <div className="auth_main_butom"> 
                         <button className="btn btn-primary">Ingresar</button>
                         </div>
                         
                         

                         

                     </form>
                 </div>
            </div>

               
           
        </div>
    )
}

export default withRouter(LoginScreen)
