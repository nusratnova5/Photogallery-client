import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import useTittle from '../../Hooks/useTittle';

const SignUP = () => {
  useTittle('SignUp');
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const handleSignUp=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            handleUpdateUserProfile(name);
        })
        .catch(err =>console.error(err));
    }
    const handleUpdateUserProfile = (name, photo) => {
      const profile = {
          displayName: name,
          photoURL: photo
      }

      updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
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
      <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
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
          <button className="btn btn-primary" >SIGN UP</button>
        </div>
        <p>Already have an account!<Link className='text-orange-600 font-bold' to='/login'> SIGN IN</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUP;