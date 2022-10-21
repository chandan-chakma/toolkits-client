import React from 'react';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';

const User = ({ user, index, refetch }) => {
    const { email, role } = user;
    const navigate = useNavigate();

    const MakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `barer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`Failed to make an admin`)

                }

                return res.json()
            })
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully make an admin`)

                }

            })
    }

    const removeUser = () => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                // console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/');

                }
                return res.json()

            })
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    refetch();
                    toast(`user ${email} has been delete`);
                }
            })
    }


    return (


        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            {/* <td>{address}</td> */}
            <td>{role !== 'admin' && <button onClick={MakeAdmin} className='btn btn-sm'>Make Admin</button>}</td>
            <td><button onClick={removeUser} className='btn btn-sm'>Remove User</button></td>

        </tr>


    );
};

export default User;