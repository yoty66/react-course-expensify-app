import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


   const LoginPage = ({ startLogin })=>( <button onClick={startLogin}> Login </button>);


const mapDispatchToProps = ( dispatch )=> ({
   startLogin: ()=> dispatch(startLogin())
   // startLogin: ()=> console.log('123')
});

   export default connect(null , mapDispatchToProps)(LoginPage)




