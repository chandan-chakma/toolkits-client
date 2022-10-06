import React from 'react';

const User = ({ user, index }) => {
    const { email } = user;


    return (


        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button className='btn btn-sm'>Make Admin</button></td>
            <td><button className='btn btn-sm'>Remove User</button></td>

        </tr>


    );
};

export default User;