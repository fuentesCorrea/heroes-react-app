import { types } from "../type/Types";

 export  const AuthReducer = (state={}, action ) => {

switch (action.type) {
    case types.login:
        
        return {
            ...action.payload
            
        }
    case types.logout:
        
            return {
                logged: false
            }

    default:
       return state;
}

}