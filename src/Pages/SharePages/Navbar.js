import React from 'react';
import logo from '../../asset/image/logo/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const manuItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/tools'>Tools</Link></li>
        <li><Link to='/business'>Business Summary</Link></li>
        <li><Link to='/'>Reviews</Link></li>

        {/* <li><Link>Home</Link></li> */}



    </>



    return (
        <div className="navbar bg-base-100 justify-start lg:justify-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItem}
                    </ul>
                </div>
                <Link to='/home'><img className='w-20%' src={logo} alt="logo" /></Link>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>

            {/* desktop */}

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manuItem}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;