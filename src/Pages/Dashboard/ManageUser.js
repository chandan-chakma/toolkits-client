import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharePages/Loading/Loading';
import User from './User';
import { signOut } from 'firebase/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://secret-cove-53846.herokuapp.com/user', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');

        }

        return res.json()
    }))
    // console.log('user', users)

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-8'>
            <div className="overflow-x-auto">
                <table className="table w-3/4">
                    <tbody>
                        {
                            users.length > 0 && users.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></User>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUser;