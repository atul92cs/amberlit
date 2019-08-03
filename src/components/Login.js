import React,{Component} from 'react';
import {Form,FormGroup,Input,Alert,Button} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../action/authAction';
import {clearErrors} from '../action/errorAction';

class Login extends Component{
    state={
        
        email:'',
        password:'',
        msg:null
        
    };
    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        login:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    };
    toggle=()=>{
        this.props.clearErrors();
    };
    onSumbit=e=>{
        e.preventDefault();
        const {email,password}=this.state;
        this.props.login(email,password);
        this.toggle();
    };
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    };
    componentDidUpdate(prevProps){
       const {error,isAuthenticated}=this.state;
       if(error!==prevProps.error)
       {
           if(error.id==='LOGIN_FAIL')
           {
               this.setState({msg:error.msg.msg});

           }
           else
           {
               this.setState({msg:null});
           }
           if(isAuthenticated)
           {

           }
       }
    };
    render(){
        return(
            <div>
             <div className="alert-section">
             {this.state.msg?(
                 <Alert color='danger'>{this.state.msg}</Alert>
             ):null}
             </div>
             <div className="form-section">
             <h1>Amberlit</h1>
             <Form onSubmit={this.onSumbit}>
             <FormGroup>
             <Input type="email" placeholder="Email" name="email" onChange={this.onChange} required/>
             </FormGroup>
             <FormGroup>
             <Input type="password" placeholder="Password" name="Password" onChange={this.onChange} required/>
             </FormGroup>
             <FormGroup>
             <Button type="sumbit" className="text-center">Login</Button>
             </FormGroup>
             </Form>
             </div>
            </div>
        );
    }
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error
});
export default connect(
    mapStateToProps,
    {login,clearErrors}
)(Login);