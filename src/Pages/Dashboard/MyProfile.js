import React from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSaveProfile = (event) => {
        event.preventDefault();
    }
    return (
        <div className='mx-3 mt-12'>
            <div className='flex items-center'>
                <div class="avatar">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt='profile' />
                    </div>
                </div>

                <div className='ml-4'>
                    <h3 className='font-bold text-2xl'>{user.displayName}</h3>
                </div>
            </div>

            <form onSubmit={handleSaveProfile}>

                <div className='mt-12 mb-8'>
                    <input type="email" placeholder="email" value={user.email} class="input w-full max-w-xs" readOnly />
                </div>
                <div className='mb-8'>
                    <input type="number" placeholder="phone number" class="input w-full max-w-xs" />
                </div>
                <div className='mb-8'>
                    <input type="text" placeholder="Address" class="input w-full max-w-xs" />
                </div>
                <input className="btn btn-primary w-24" type="submit" value="Save" />

            </form>







        </div>
    );
};

export default MyProfile;