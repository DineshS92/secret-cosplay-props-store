import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import  { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({[name]: value});
  }
  
  handleSubmit = e => {
    e.preventDefault();

    this.setState({email: '', password: ''});
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I have an Account</h2>
        <span>Sign in with Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label='Email' handleChange={this.handleChange} name='email' type='email'value={this.state.email} required/>
          <FormInput label='Password' handleChange={this.handleChange} name='password' type='password' value={this.state.password} required/>
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}


export default SignIn;