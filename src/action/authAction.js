import {AUTH_ERROR,REGISTER_FAIL,REGISTER_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS} from './types';
import axios from 'axios';
import {returnErrors} from './errorAction';

export const register=({email,name,password,phone})=>dispatch=>{
  const config={
      headers:{
          'Content-Type':'application/json'
      }
  };
  const body=JSON.stringify({name,email,phone,password});
  axios.post('/user/register',body,config).then(res=>{
       dispatch({
           type:REGISTER_SUCCESS,
           payload:res.data
       })

  }).catch(err=>{
      dispatch(
          returnErrors(err.response.data,err.response.status,'REGIESTER_FAIL')
      );
      dispatch({
          type:REGISTER_FAIL
      });
  });
};
export const login=({email,password})=>dispatch=>{
  const config={
      headers:{
        'Content-Type':'application/json'
      }
  };
  const body=JSON.stringify({email,password});
   axios.post('/user/login',body,config).then(res=>{
      dispatch({
          type:LOGIN_SUCCESS,
          payload:res.data

      })
   }).catch(err=>{
          dispatch(
              returnErrors(err.response.data,err.response.status)
          );
          dispatch({
              type:LOGIN_FAIL
          });
   });
};
export const tokenConfig=getState=>{
    const token=getState().auth.token;

    const config={
        headers:{
            'Content-type':'applicaiton/json'
        }
    };
    if(token)
    {
        config.headers['x-auth-token']=token;
    }
    return config;
};