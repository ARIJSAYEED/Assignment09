import React, { use } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';

const Login = () => {
    let location = useLocation()
    // console.log(location);
    let navigate = useNavigate()
    let { signInUser } = use(AuthContext)

    let handleSubmit = (e) => {

        e.preventDefault()

        let email = e.target.email.value;
        let password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                alert('LoggedIn Successfully!')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                // console.log(error);
            })
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card bg-neutral-200 w-full max-w-lg shrink-0 shadow-lg">
                <div className="card-body space-y-5">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Login your account!</h1>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset mb-3 space-y-2">

                            <label className="label font-semibold text-black">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Enter your email" />

                            <label className="label font-semibold text-black">Password</label>
                            <input name='password' type="password" className="input w-full" placeholder="Password" />

                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <div><Link to='/auth/register'>New to our Webisite? <span className='text-[#0099FF]'>Register Now!</span> </Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;