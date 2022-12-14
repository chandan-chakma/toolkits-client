import React from 'react';
import logo from '../../asset/image/logo/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const LogOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');



    }

    const manuItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/tools'>Tools</Link></li>

        {user && <li><Link to='/dashboard'>Dashboard </Link></li>}
        <li><Link to='/blog'>Blog</Link></li>
        {/* <li><Link to='/'>Reviews</Link></li> */}
        {user ? < button onClick={LogOut} className='btn ml-2'>Log Out</button>
            : <li><Link to='/login'>Login</Link></li>}
    </>

    return (
        <div className="navbar bg-base-100 justify-start lg:justify-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul
                        tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold uppercase">
                        {manuItem}
                    </ul>

                </div>
                <Link to='/home'><img className='w-20%' src={logo} alt="logo" /></Link>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>

            {/* desktop */}

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold capitalize">
                    {manuItem}
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <label tabIndex="0" className="btn btn-ghost " for="my-drawer-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default Navbar;