import React,{Component} from 'react';
import {Form,FormGroup,Input,Button,UncontrolledAlert} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../action/authAction';
import {clearErrors} from '../action/errorAction';
import './style/Register.css';
class Register extends Component{
    state={
        name:'',
        email:'',
        phone:'',
        password:'',
        password2:'',
        msg:null
    };
    static propTypes={
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    };
    toggle=()=>{
        this.props.clearErrors();
    };
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    };
    onSumbit=e=>{
        e.preventDefault();
        const {name,email,phone,password,password2}=this.state;
        const newUser={name,email,phone,password};
        this.props.register(newUser);
    };
    componentDidUpdate(prevProps) {
       const {error}=this.props;
       if(error!==prevProps.error)
       {
           if(error.id==='REGISTER_FAIL')
           {
               this.setState({msg:error.msg.msg});
           }
           else 
           {
               this.setState({msg:null});
           }
       }
    };
    render()
    {
        return(
            <div>
            
            <div className="form-section">
              <h1>Amberlit</h1>
              <div className="alert-section">
            {this.state.msg?(
                <UncontrolledAlert color='info'>{this.state.msg}</UncontrolledAlert>
            ):null}
            </div>
             <Form onSubmit={this.onSumbit}>
             <FormGroup>
             <Input type="text" name="name" placeholder="Name" onChange={this.onChange} required/>
             </FormGroup>
             <FormGroup>
             <Input type="number" name="phone" placeholder="Phone" onChange={this.onChange} required/>
             </FormGroup>
             <FormGroup>
             <Input type="email" name="email" placeholder="Email" onChange={this.onChange} required/>
             </FormGroup>
             <FormGroup>
             <Input type="password" name="password" placeholder="Password" onChange={this.onChange} required/>
             </FormGroup>
             <FormGroup>
             <Input type="password" name="password2" placeholder="Confirm Password" onChange={this.onChange} required/>
             </FormGroup>
             <FormGroup>
             <Button type="sumbit" text-center="true">Register</Button>
             </FormGroup>
             
             </Form>
            </div>
            </div>
        );
    }
}

const mapStateToProps=state=>({
    error:state.error
});

export default connect(
    mapStateToProps,
    {register,clearErrors}
)(Register);
