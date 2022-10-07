import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mx-8 lg:mx-36 my-12">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-left">
                <h2 className='text-3xl text-green-700 font-bold'>Welcome to Dashboard</h2>

                <Outlet ></Outlet>

            </div>
            <div class="drawer-side ">
                <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/manageuser'>Manage user</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;