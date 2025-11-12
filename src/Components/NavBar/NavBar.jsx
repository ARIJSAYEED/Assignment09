import React, { useContext } from 'react';
import logo from '../../assets/GameHub Logo.png'
import { NavLink } from 'react-router';
import './NavBar.css'
import { AuthContext } from '../../Auth/AuthProvider';

const NavBar = () => {
    let { user, logOut } = useContext(AuthContext)

    let handleLogOut = () => {
        // alert('user trying to logout');
        logOut()
            .then(() => {
                alert('Logged Out Successfully');
            })
            .catch(error => {
                console.log(error)
            })
    }

    let links = <>
        <NavLink className='text-lg font-semibold px-5 py-2 rounded-xl' to='/'>Home</NavLink>
        <NavLink className='text-lg font-semibold px-5 py-2 rounded-xl' to='/games'>Games</NavLink>
        <NavLink className='text-lg font-semibold px-5 py-2 rounded-xl' to='/developers'>Developers</NavLink>
    </>

    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a>
                        <img className='w-40' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex gap-3'>
                                <div>
                                    <img className='w-10 h-10 rounded-full object-cover' src={`${user ? user.photoURL : ''}`} alt="" />
                                </div>
                                <button onClick={handleLogOut}>
                                    <a className="text-lg btn bg-[#0099FF] text-white rounded-2xl">logOut</a>
                                </button>
                            </div>
                            :
                            <div className='space-x-3'>
                                <NavLink to='/auth/login'>
                                    <a className="text-lg btn bg-[#0099FF] text-white rounded-2xl">Login</a>
                                </NavLink>
                                <NavLink to='/auth/register'>
                                    <a className="text-lg btn bg-[#0099FF] text-white rounded-2xl">Register</a>
                                </NavLink>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;