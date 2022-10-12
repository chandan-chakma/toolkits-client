import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharePages/Loading/Loading';
import User from './User';

const ManageUser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>ami vat jha</h3>
            <h3>{users.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-3/4">
                    <tbody>
                        {
                            users.map((user, index) => <User
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