import {USER_LOADED,USER_LOADING,REGISTER_FAIL,REGISTER_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT_SUCCESS, AUTH_ERROR} from '../action/types';
const intialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    user:null
};

export default function(state=intialState,action){
    switch(action.type)
    {
       case USER_LOADING:
           return{
              ...state,
               isLoading:true
           };
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload
            };
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isLoading:false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            return{
              ...state,
              token:null,
              user:null,
              isAuthenticated:false,
              isLoading:false
            };
        case LOGIN_SUCCESS:
         localStorage.setItem('token',action.payload.token);   
        return{
             ...state,
             isAuthenticated:true,
             isLoading:false
            };
        case REGISTER_FAIL:
            return{
                isLoading:false
            }
        default:
            return state;
        
    }
}