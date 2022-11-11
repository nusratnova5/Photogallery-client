import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import useTittle from '../../Hooks/useTittle';


const Login = () => {
  const [error,setError]=useState('');
  const {LogIn,googleLogIn}=useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  useTittle('Sign In');
    
  const handleLogIn =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        LogIn(email,password)
          .then(result=>{
            const user=result.user;
            console.log(user);
          })
          .catch(error=>{
            console.log(error.message);
            setError(error.message);
          })

    }
    const handleGoogleLogIn = () => {
      googleLogIn(googleProvider)
          .then(result => {
              const user = result.user;
              console.log(user);
             // navigate( from, {replace: true} );
          })
          .catch(error => {
              console.error(error);
          })
        
  }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SIGN IN</button>
        </div>
        <p>New to this website!<Link className='text-orange-600 font-bold' to='/signup'> SIGN UP</Link></p>
        <button onClick={handleGoogleLogIn} className="btn btn-outline">Google</button>
        
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;